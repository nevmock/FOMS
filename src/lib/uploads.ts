import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		if (file.fieldname === 'profilePicture') {
			cb(null, 'public/images/profile');
		} else if (file.fieldname === 'bannerPicture') {
			cb(null, 'public/images/banner');
		}
	},
	filename: (req, file, cb) => {
		cb(null, `${Date.now()}-${file.originalname}`);
	},
})
export const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype)) {
			cb(null, true);
		} else {
			cb(null, false);
		}
	},
	limits: { fileSize: 2282810 },
});