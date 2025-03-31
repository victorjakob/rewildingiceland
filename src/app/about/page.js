export default function AboutPage() {
  return (
    <>
      {/* Fixed Background Container */}
      <div
        className="fixed inset-0 w-full h-full z-[-1]"
        style={{
          backgroundImage: `url('https://res.cloudinary.com/dy8q4hf0k/image/upload/v1743446600/iceland3_pbs6id.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/15" />
      </div>
    </>
  );
}
