<script>
document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver(function (entries, observer) {
        const targetDiv = document.getElementById('tile-feature-list-am9XSf');
        if (entries[0].isIntersecting && targetDiv) {
            const childElement = targetDiv.querySelector('.ins-tile__wrap');

            if (childElement) {
                childElement.innerHTML = `
                    <div class="flex-container">
                        <div class="content">
                            <ul>
                                <li class="heading"><h4>GAMING</h4></li>
                                <li><a href="#">EA FC Punten</a></li>
                                <li><a href="#">Fortnite V-Bucks</a></li>
                                <li><a href="#">Google Play</a></li>
                                <li><a href="minecraft">Minecraft</a></li>
                                <li><a href="#">Nintendo</a></li>
                                <li><a href="#">PlayStation</a></li>
                                <li><a href="#">Riot Points</a></li>
                                <li><a href="#">Roblox</a></li>
                                <li><a href="#">Steam</a></li>
                                <li><a href="#">Xbox</a></li>
                            </ul>
                        </div>
                        <div class="content">
                            <ul>
                                <li class="heading"><h4>PRECARDS.NL</h4></li>
                                <li><a href="#">Algemene voorwaarden</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Privacybeleid</a></li>
                                <li><a href="#">Over ons</a></li>
                                <li><a href="#">Cookies</a></li>
                                <li><a href="#">Informatie</a></li>
                                <li><a href="#">Reviews</a></li>
                            </ul>
                        </div>
                        <div class="content">
                            <ul>
                                <li class="heading"><h4>KLANTENSERVICE</h4></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="faq">FAQ</a></li>
                                <li><a href="#">Ons bedrijf</a></li>
                                <li><a href="#">Retour</a></li>
                                <li><a href="#">Saldo opvragen</a></li>
                            </ul>
                        </div>
                    </div>
                `;
                observer.disconnect();
            }
        }
    }, { threshold: 0.5 });

    const targetDiv = document.getElementById('tile-feature-list-am9XSf');
    if (targetDiv) {
        observer.observe(targetDiv);
    }
});
</script>
