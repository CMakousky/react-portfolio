function AboutMe() {
    return(
        <>
            <section id="about-me">
                <h1>About Christopher Makousky</h1>
                    <aside>
                        {/* Photo of myself. */}
                        <img src="./images/photo-cropped.jpg" alt="Some Photo"/>
                    </aside>
                    <div id="bio">
                        {/* Short Bio about myself. */}
                        <p>
                            Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
                            Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
                            mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
                            lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
                            imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
                            in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
                        </p>
                    </div>
            </section>
        </>
    );
};

export default AboutMe;