const About = () => {
  return (
    <div
      className="about"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "70vh",
        fontSize: "1.5rem",
      }}
    >
      <h1>Hi I'm Zach Stone</h1>
      <p>I'm a self-taught web developer who can speak Japanese.</p>
      <p> use my digital business card made with linktr.ee to get in touch.</p>
      <br />
      <a href="https://linktr.ee/zachinjapan">
        {" "}
        https://linktr.ee/zachinjapan{" "}
      </a>
    </div>
  );
};

export default About;
