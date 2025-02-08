const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
                {/*Company Info */}
                <h3 className="text-xl font-bold">Our Company</h3>
                <p>Providing quality products since 2024.</p>
            </div>

            {/*Contact Info */}
            <div className="text-center">
                <h3 className="text-xl font-bold">Contact Us</h3>
                <p>Email: support@shopnow.com</p>
                <p>Phone: +123 456 7890</p>
            </div>

            {/*SocialMedia Links */}
            <div className="text-center md:text-right">
                <h3 className="text-xl font-bold">Follow Us</h3>
                <div className="flex justify-center md:justify-end space-x-4 mt-2">
                    <a href="#" className="hover:text-gray-400">Facebook</a>
                    <a href="#" className="hover:text-gray-400">Twitter</a>
                    <a href="#" className="hover:text-gray-400">Instagram</a>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer