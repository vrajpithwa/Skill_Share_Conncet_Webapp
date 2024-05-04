import { useState } from "react";
import { makeRequest } from "../../axios";
import { Form, Button } from "react-bootstrap"; // Import Form and Button components
import "./update.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";


const Update = ({ setOpenUpdate, user }) => {
  const [cover, setCover] = useState(null);
  const [profile, setProfile] = useState(null);
  const [texts, setTexts] = useState({
    email: user.email,
    password: user.password,
    name: user.name,
    city: user.city,
    website: user.website,
  });

  const upload = async (file) => {
    console.log(file)
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setTexts((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(
    {mutationFn:
    (user) => {
      return makeRequest.put("/users", user);
    },
    
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["user"]);
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();

    //TODO: find a better way to get image URL
    
    let coverUrl;
    let profileUrl;
    coverUrl = cover ? await upload(cover) : user.coverPic;
    profileUrl = profile ? await upload(profile) : user.profilePic;
    
    mutation.mutate({ ...texts, coverPic: coverUrl, profilePic: profileUrl });
    setOpenUpdate(false);
    setCover(null);
    setProfile(null);
  }

  return (
    <div className="update">
      <div className="wrapper">
        <h1>Update Your Profile</h1>
        <Form>
          <div className="files">
            <Form.Label htmlFor="cover">
              <span>Profile Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    cover
                      ? URL.createObjectURL(cover)
                      : "/upload/" + user.coverPic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </Form.Label>
            <Form.Control
              type="file"
              id="cover"
              style={{ display: "none" }}
              onChange={(e) => setCover(e.target.files[0])}
            />
            <Form.Label htmlFor="profile">
              <span>Cover Picture</span>
              <div className="imgContainer">
                <img
                  src={
                    profile
                      ? URL.createObjectURL(profile)
                      : "/upload/" + user.profilePic
                  }
                  alt=""
                />
                <CloudUploadIcon className="icon" />
              </div>
            </Form.Label>
            <Form.Control
              type="file"
              id="profile"
              style={{ display: "none" }}
              onChange={(e) => setProfile(e.target.files[0])}
            />
          </div>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={texts.email}
              name="email"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              value={texts.password}
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={texts.name}
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>Country / City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              value={texts.city}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="website">
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              value={texts.website}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleClick}>
            Update
          </Button>
        </Form>
        <Button variant="secondary" className="close" onClick={() => setOpenUpdate(false)}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Update;
