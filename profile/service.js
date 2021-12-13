const profileDao = require('./profile-dao');

module.exports = (app) => {
    const findAllProfile = (req, res) =>
        profileDao.findAllProfile().then(profile => res.json(profile));

    const updateProfile = (req, res) => {
        profileDao.updateProfile(req.params.id, req.body)
            .then(status => res.send(status));
    }

    const findProfileById = (req, res) => {
        profileDao.findProfileById(req.params.id).then(profile => res.json(profile));
    }

    app.get("/api/profile", findAllProfile);
    app.put("/api/profile/:id", updateProfile);
    app.get("/api/profile/:id", findProfileById);
}
