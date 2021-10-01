const User = require('../models/User');
const errorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middlewares/async');
const path = require('path');


// Get Signup Page
// /api/v1/signup
exports.getSignupPage = asyncHandler(async (req, res, next) => {
  let token;

  if (req.cookies.token) {
    token = req.cookies.token
  }

  //Make sure token exists
  if (!token) {
    res.render('signup')
  } else {
    res.redirect('/api/v1/profile')
  }

});




// Create User
// /api/v1/signup
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  //Generating Token
  let token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }

  res
    .status(200)
    .cookie('token', token, options)
    .redirect('/api/v1/profile')
});




// Get Login Page
// /api/v1/login
exports.getLoginPage = asyncHandler(async (req, res, next) => {
  let token;

  if (req.cookies.token) {
    token = req.cookies.token
  }

  //Make sure token exists
  if (!token) {
    res.render('login');
  } else {
    res.redirect('/api/v1/profile')
  }

});




// Logging User
// /api/v1/login
exports.loginUser = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email: email }).select('+password');

  if (!email || !password) {
    return next(new errorResponse('Please enter an Email or Password', 401))
  }

  //Checking if User Exists
  if (!user) {
    return next(new errorResponse('Invalid Credentials', 401))
  }

  console.log(user);

  const isMatch = await user.checkPassword(password);

  //Checking if Password is Right
  if (!isMatch) {
    return next(new errorResponse('Invalid Credentials', 401))
  }

  //Generating Token
  let token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
  }

  res
    .status(200)
    .cookie('token', token, options)
    .redirect('/api/v1/profile')
});




//Gets Currently Logged user in the profile Page
// api/v1/profile
exports.getUser = asyncHandler(async (req, res, next) => {
  const user = req.user;
  res.render('profilepage', { user: user })
});




//Updating Basic Info of User
// api/v1/user/profile/:id/basicinfo
exports.updateBasicInfo = asyncHandler(async (req, res, next) => {
  console.log(req.body);
  let user = await User.updateOne({ _id: req.params.id }, req.body, {
    runValidators: true,
    new: true,
  });

  if (!user) {
    return next(new errorResponse(`User With id ${req.params.id} Not Found`));
  }

  res
    .status(200)
    .json({ success: true, data: `User Updated with id ${req.params.id}` });
});




// Inserting Matriculation Marks of the student
// api/v1/profile/education/matric
exports.insertMatriculation = asyncHandler(async (req, res, next) => {

  console.log(req.body);
  let user = await User.findById(req.user.id);

  if (!user) {
    return next(new errorResponse(`User With id ${req.user.id} Not Found`));
  }

  user = await User.findByIdAndUpdate(req.user.id, { matriculation: req.body })

  console.log(user);
  res.redirect('/api/v1/profile')

});


// Inserting Intermediate Marks of the student
// api/v1/profile/education/matric
exports.insertIntermediate = asyncHandler(async (req, res, next) => {

  console.log(req.body);
  let user = await User.findById(req.user.id);

  if (!user) {
    return next(new errorResponse(`User With id ${req.user.id} Not Found`));
  }

  user = await User.findByIdAndUpdate(req.user.id, { intermediate: req.body })

  console.log(user);
  res.redirect('/api/v1/profile')

});

// Inserting Graduation Marks of the student
// api/v1/profile/education/graduation
exports.insertGraduation = asyncHandler(async (req, res, next) => {

  console.log(req.body);
  let user = await User.findById(req.user.id);
  console.log(user);
  if (!user) {
    return next(new errorResponse(`User With id ${req.user.id} Not Found`));
  }

  user = await User.findByIdAndUpdate(req.user.id, { $push: {graduation: req.body}})

  console.log(user);
  res.redirect('/api/v1/profile')

});

// Inserting Skills 
// api/v1/profile/education/skills
exports.insertSkills = asyncHandler(async (req, res, next) => {


  let user = await User.findById(req.user.id);

  if (!user) {
    return next(new errorResponse(`User With id ${req.user.id} Not Found`));
  }

  user = await User.findByIdAndUpdate(req.user.id, { $push: { skills: req.body } })

  console.log(user);
  res.redirect('/api/v1/profile')
});



// Inserting Achievement And Responsibilities
// api/v1/profile/education/achievement
exports.insertAchievements = asyncHandler(async (req, res, next) => {

  console.log(req.body);
  let user = await User.findById(req.user.id);

  if (!user) {
    return next(new errorResponse(`User With id ${req.user.id} Not Found`));
  }

  user = await User.findByIdAndUpdate(req.user.id, { $push: { achievements: req.body } })

  console.log(user);
  res.redirect('/api/v1/profile')

});



// Uploading Profile photo of the user
// api/v1/user/profile/:id/photo
exports.uploadProfilePhoto = asyncHandler(async (req, res, next) => {
  let user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new errorResponse(`User with ID ${req.params.id} Not Found `, 400)
    );
  }
  const files = req.files['file'];

  if (!req.files) {
    return next(new errorResponse(`Image Not Found`, 404));
  }

  if (!files.mimetype.startsWith('image')) {
    return next(new errorResponse(`Please Upload an Image File Type`, 400));
  }

  if (!files.size > process.env.MAX_PIC_SIZE) {
    return next(new errorResponse(`Image Size Limit Exceeded`, 400));
  }

  files.name = `${files.name}_${req.params.id}${path.parse(files.name).ext}`;
  files.mv(`${process.env.FILE_UPLOAD_PATH}/${files.name}`, async (err) => {
    if (err) {
      console.log(err);
      return next(new errorResponse(`Server Error`, 500));
    }

    await User.findByIdAndUpdate(req.params.id, { photo: files.name });

    res.status(200).json({ success: true, data: files.name });
  });
});



//Deleting User
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return next(new errorResponse(`User With id ${req.params.id} Not Found`));
  }

  res.status(200).json({
    success: true,
    data: `Deleting User with id ${req.params.id}`,
    user,
  });
});



//Logout Existing User 
exports.logoutUser = asyncHandler(async (req, res, next) => {

  req.user = undefined;
  res
    .cookie('token', 'none', {
      expires: new Date(Date.now() + 10 * 1000),
      httpOnly: true
    })

    .render('signup')

})