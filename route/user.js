const express = require('express');
const router = express.Router();

const {

    getUser,
    getSignupPage,
    createUser,
    getLoginPage,
    loginUser,
    updateBasicInfo,
    insertMatriculation,
    insertIntermediate,
    insertGraduation,
    insertSkills,
    insertAchievements,
    deleteUser,
    uploadProfilePhoto,
    logoutUser
} = require('../controllers/user');

const { protect } = require('../middlewares/auth')


router.route('/signup').get(getSignupPage).post(createUser);
router.route('/login').get(getLoginPage).post(loginUser);

router.route('/profile').get(protect, getUser)

router.route('/profile/:id/basicinfo').put(updateBasicInfo)
router.route('/profile/education/matric').post(protect, insertMatriculation)
router.route('/profile/education/inter').post(protect, insertIntermediate)
router.route('/profile/education/graduation').post(protect, insertGraduation)
router.route('/profile/education/skills').post(protect, insertSkills)
router.route('/profile/education/achievement').post(protect, insertAchievements)


router.route('/profile/:id/photo').put(uploadProfilePhoto)
router.route('/profile/:id/delete').delete(deleteUser)
router.route('/logout').get(logoutUser)

module.exports = router;