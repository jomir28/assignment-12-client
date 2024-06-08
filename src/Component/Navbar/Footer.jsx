import microEarn from '../../assets/icons/earning.png'
import img1 from '../../assets/footer icons/icons8-facebook-50.png'
import img2 from '../../assets/footer icons/icons8-github-50.png'
import img3 from '../../assets/footer icons/icons8-linkedin-50.png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <aside>
                    <img className='w-24' src={microEarn} alt="" />
                    <p>© 2024 MicroEarn. All rights reserved.</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a target='_blank' href='https://www.facebook.com/profile.php?id=100086197030010'>
                            <img className='w-7' src={img1} alt="" />
                        </a>
                        <a target='_blank' href='https://github.com/rakibgithub21'>
                            <img className='w-7' src={img2} alt="" />
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/mdrakibulislam71/'>
                            <img className='w-7' src={img3} alt="" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;