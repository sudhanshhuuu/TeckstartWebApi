import React from 'react';
import vg from "../assets/dragon.png"

import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram
} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id='home'>
                <main>
                    <h1>TechStar</h1>
                    <p>Solution to All your problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="graphics" />
                <div>
                    <p>
                        We are yor one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the problem solving ability in childern
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem amet magnam excepturi tempora eaque quo nulla, doloremque placeat nostrum assumenda cupiditate consequuntur, error earum. Ipsum illo quos, aliquid unde obcaecati minus ullam repellat nulla nesciunt voluptatem veritatis consequuntur dignissimos possimus, tempora ducimus sunt? Tenetur expedita impedit, aut dolorem modi earum pariatur id molestiae magni. Iste, expedita? Iure qui, accusantium vero doloribus saepe harum? Facilis sapiente, cupiditate, illo voluptate ipsa laboriosam iure tempore provident quod soluta expedita rem doloribus voluptatibus modi similique delectus dolorum ratione vel consequuntur placeat totam ducimus. Ducimus, aliquid nobis. Praesentium alias voluptate voluptates neque odit maiores porro.
                    </p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{
                            animationDelay: '0.3s'
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{
                            animationDelay: '0.5s'
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amozone</p>
                        </div>
                        <div style={{
                            animationDelay: '0.7s'
                        }}>
                            <AiFillYoutube />
                            <p>YouTube</p>
                        </div>
                        <div style={{
                            animationDelay: '0.9s'
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>

        </>
    )
}

export default Home
