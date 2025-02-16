import bg from "../../assets/bg/boi-col.jpg";
const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-center max-w-6xl mx-auto mt-40 p-6">
            {/* Left - Image */}
            <div className="md:w-1/2 w-full">
                <img
                    src={bg}
                    alt="Brand History"
                    className="w-full h-auto object-cover"
                />
            </div>

            {/* Right - Text */}
            <div className="md:w-1/2 w-full p-6">
                <h2 className="text-xl md:text-2xl font-bold mb-4">HISTORY OF THE BRAND</h2>
                <p className="text-gray-700 mb-4">
                    Exce first launched in the summer of 1996 in Stockholm and New York simultaneously.
                    Our founder, John Exceberg, had a desire to challenge conventions and an idea to modernize
                    the golfing fashion landscape, leaving the stale and the conservative behind.
                </p>
                <p className="text-gray-700">
                    Today, Exce has grown into a fashion and sports brand with a worldwide presence,
                    offering innovative pieces within fashion, golf, ski, tennis, outdoor, and more.
                </p>
            </div>
        </div>
    )
}

export default About
