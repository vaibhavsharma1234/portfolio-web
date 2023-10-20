import { Instagram, Facebook, Twitter, Linkedin } from 'react-feather';

const Footer = () => {
    return (
        <div className="bg-black py-12">
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center text-white">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-semibold">VAIBHAV SHARMA</h2>
                    <p className="text-lg md:text-xl mt-2 md:w-96">
                        A Frontend focused Web Developer building the Frontend of Websites and Web Applications that lead to the success of the overall product.
                    </p>
                </div>
                <div className="mt-8 md:mt-0">
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram size={32} color="white" />
                        </a>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook size={32} color="white" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter size={32} color="white" />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <Linkedin size={32} color="white" />
                        </a>
                    </div>
                </div>
            </div>
            <hr className="bg-slate-50 h-0.5 my-8" />
            <div className="text-center text-sm md:text-base">
                <p className="text-white">
                    © Copyright 2023. Made by Vaibhav Sharma
                </p>
            </div>
        </div>
    );
};

export default Footer;
