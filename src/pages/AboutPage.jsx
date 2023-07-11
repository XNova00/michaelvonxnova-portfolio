import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import { techStackIcons } from "../utils/Data";

export const AboutPage = () => {
  return (
    <>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingTop: "64px",
          paddingBottom: "64px",
          gap: "128px",
        }}
      >
        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            flexDirection: "column",
            gap: "64px",
          }}
        >
          <Box>
            <Typography variant="h1">About me</Typography>
          </Box>
          <Box
            sx={{
              display: { sm: "block", md: "flex" },
              gap: "64px",
            }}
          >
            <img
              src="/img/About Img.png"
              alt="Michael Von Image"
              style={{
                width: "100%",
              }}
            />
            <Typography variant="body1" color="secondary.main">
              "Hello! I'm Michael Von, a passionate and innovative web designer
              and front-end web developer. With a strong eye for aesthetics and
              a understanding of user experience. I believe that good design is
              not only visually appealing but also user-centric. My goal is to
              merge creativity with technical expertise to craft websites that
              not only look stunning but also provide seamless navigation and
              optimal performance across various devices and platforms.
              <br />
              <br />
              If you're looking for a creative web designer and front-end web
              developer who can transform your digital presence into a
              compelling experience, let's connect. Together, we can bring your
              ideas to life and make an impact in the digital world."
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: { sm: "block", md: "flex" },
            flexDirection: "column",
            gap: "64px",
          }}
        >
          <Box>
            <Typography variant="h1">Skills</Typography>
          </Box>
          <Box
            sx={{
              display: { sm: "block", md: "flex" },
              gap: "64px",
            }}
          >
            <Typography component="ul" variant="body1" color="secondary.main">
              "I am constantly expanding my skill set and staying at the
              forefront of the ever-evolving web design and front-end
              development landscape. Here are some of the skills that I am
              currently working on, practicing, and actively improving.
              <br />
              <br />
              <li>
                Responsive Web Design: I am dedicated to creating websites that
                adapt seamlessly to different screen sizes and devices,
                providing an optimal user experience across platforms.
              </li>
              <li>
                User Experience (UX) Design: I am passionate about understanding
                user behavior and incorporating intuitive and user-centric
                design principles to enhance usability and engagement.
              </li>
              <li>
                CSS3: I am continuously honing my CSS skills, exploring the
                latest CSS3 techniques.
              </li>
              <li>
                Javascript: It is possible to implement frequent UI’s, I’m
                currently familiarizing JS syntax and functionalities.
              </li>
              <li>
                Front-End Frameworks: I am building my projects with popular
                front-end frameworks like Bootstrap or MUI React to expedite
                development and ensure responsive and visually appealing
                designs.
              </li>
              <li>
                Git / Github: Creating a personal site, I manage it on GitHub. I
                have no experience using it with multiple people.
              </li>
              <li>
                Continuous Learning: I am committed to staying updated with
                emerging web technologies, design trends, and best practices by
                participating in online courses, attending industry conferences,
                and actively engaging in the web design and development
                community.
              </li>
            </Typography>
            {/* {techStackIcons.map((item) => (
              <Grid container key={item}>
                <Grid>{item.icon}</Grid>
              </Grid>
            ))} */}
            <Grid container spacing={2}>
              {techStackIcons.map((item, index) => (
                <Grid item lg={6} key={index}>
                  <List>
                    <ListItem>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                    </ListItem>
                  </List>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
