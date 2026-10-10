const ScrollingBanner = () => {
    const items = [
        "Your Glow-Up Starts Here",
        "✦",
        "Nourish Your Skin, Pamper Your Lips",
        "✦",
        "Your Skin, Your Care, Your Confidence",
        "✦",
        "Nourish Your Skin, Love Your Lips",
        "✦",
        "Skincare Essentials for Your Daily Routine",
        "✦",
        "Everyday Care, Extraordinary Glow",
        "✦",
        "Complete Your Look",
        "✦",
    ];

    return (
        <div className="banner">
            <div className="banner-track">
                {items.map((text, index) => (
                    <span key={index} className="banner-item">
                        {text}
                    </span>
                ))}

                {items.map((text, index) => (
                    <span key={`dup-${index}`} className="banner-item">
                        {text}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ScrollingBanner;