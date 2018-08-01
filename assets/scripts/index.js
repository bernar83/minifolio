const description = [
    "A timeglass",
    "A square",
    "A rocket lifting off",
    "Figure with a tie and a magnifying glass for a head",
    "A milk jar with 'creative milk' title",
    "A squirrel",
    "A blue ribbon",
    "Letter F"
];

$(document).ready(function() {
    for (let i = 0; i < 8; i++) {
        $(".project-wrapper").append(
            `<section class="img-wrapper">
                <img src="assets/images/work-${i + 1}.jpg" alt="${description[i]}">
                <div class="img-description-layer">
                    <h5>Project Name</h5>
                    <p>Coming Soon</p>
                </div>
            </section>`
        );
    }
});