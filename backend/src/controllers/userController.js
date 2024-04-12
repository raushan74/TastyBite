import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/userModel.js"

import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from 'jsonwebtoken'

// generate access and refresh token

const generateAccessAndRefreshTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()

        // adding value to user
        user.refreshToken = refreshToken
        // saving refresh token to database
        // befor saving token it will ask for required field, so we hav set validateBeforeSave to false
        await user.save({ validateBeforeSave: false })
        // access token generated
        return { accessToken, refreshToken }

    } catch (error) {
        throw new ApiError(500, "something went wrong while generating refresh and access token")
    }
}


const registerUser = asyncHandler(async (req, res) => {
    // res.status(200).json({
    //     message: "ok",
    // });
    // get user details from frontend
    // validation - not empty
    // check if user already exists: mobileNumber, email
   
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    // getting user details
    const { mobileNumber, email, fullName, password } = req.body
    //console.log("email: ", email);
    // checking field is not empty
    if (
        [fullName, email, mobileNumber, password].some((field) => field?.trim() === "")
    ) 
        //throw new ApiError(400, "All fields are required")
       return res
        .status(400)
        .json( "all field required")
    

    // checking for existing user
    const existedUser = await User.findOne({
        $or: [{ mobileNumber }, { email }]
    })

    if (existedUser) {
        throw new ApiError(409, "User with email or mobileNumber already exist")
    }

    

    // entry in database

    const user = await User.create({
        mobileNumber,
       
        fullName,
        email,
        password,
        
    })

    // chek if user is created or not
    const createdUser = await User.findById(user._id).
        // to remove password and refreshToken
        select("-password -refreshToken"
        )

    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering user")
    }

    // sending response
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered successfully")
    )

});


// login conttroller for user

const loginUser = asyncHandler(async (req, res) => {
    // get data from req body
    // username or email
    // find the user
    // password check
    // access and refresh token
    // send this token in form of cookie

    const { email, mobileNumber, password } = req.body

    if (!mobileNumber && !email) {
       // throw new ApiError(400, "mobile number or email is required")
        return res
        .status(400)
        .json({data:"mobile or email required"})
    }
    

    // Here is an alternative of above code based on logic discussed in video:
    // if (!(username || email)) {
    //     throw new ApiError(400, "username or email is required")

    // }

    const user = await User.findOne({
        $or: [{ mobileNumber }, { email }]
    })
    // if user not found
    if (!user) {
        throw new ApiError(404, "User does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid User Credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

    // optional
    const loggedInUser = await User.findById(user._id).
        select("-password -refreshtoken")

    // sending cookie
    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            // new ApiResponse(
            //     200,
            //     {
            //         user:  loggedInUser,accessToken,
            //         refreshToken
            //     },
            //     "User logged In successfully"
            // )
           {
               "statuscode": 200,
               "data": {
                    "user":  loggedInUser,accessToken,
                    refreshToken
                },
                message:"User logged In successfully"
            }
            )
        

})


// logOut Controller for user

const logOutUser = asyncHandler(async (req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }

    );

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged Out"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    // verify incoming token

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET

        )

        const user = await User.findById(decodedToken?._id)

        if (!user) {
            throw new ApiError(401, "Invalid refresh Token")
        }

        if (incomingRefreshToken != user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
        }

        const options = {
            httpOnly: true,
            secure: true
        }

        const { accessToken, newRefreshToken } = await generateAccessAndRefreshTokens(user._id)

        return res
            .status(200)
            .cookie("access token", accessToken, options)
            .cookie("refreshToken", newRefreshTokenefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    { accessToken, refreshToken: newRefreshToken },
                    "Access token refreshed"
                )
            )
    } catch (error) {
        throw new ApiError(401, error?.message || "invalid refrsh token")
    }
})

// change password
const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordCorrect = await user.
        isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new ApiError(400, "Invalid old password")
    }
    user.password = newPassword
    await user.save({ validateBeforeSave: false })

    return res
        .status(200)
        .json(new ApiResponse(200, {}, "Password changed successfully"))

})

// get current user

const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, req.user, "current user fetched successfully"))
})

// update sccount detail

const updateAccountDetails = asyncHandler(async (req, res) => {
    const { fullName, email } = req.body

    if (!fullName || !email) {
        throw new ApiError(400, "All fields are required")
    }

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: {
                fullName,
                email: email
            }
        },
        { new: true }
    ).select("-password")

    return res
        .status(200)
        .json(new ApiResponse(200, user, "Account details updated successfully"))

})



export {
    registerUser,
    loginUser,
    logOutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    
}