// LEADERSHIP MESSAGES

const leadershipMessages = {

    chairman: {
        title: "Pearls of Wisdom — Dr. Harish Manglani",
        content: `
            <p><strong>“Pearls of wisdom”</strong></p>

            <p>In this world there is nothing so sublime and pure as knowledge; he who attains purity through a prolonged practice of Karmayoga automatically sees the light of truth within himself in due course of time.</p>

            <p><strong>Bhagwad Gita (Ch,4.38)</strong></p>

            <p>Education means bringing out idea of universal validity which is latent in the mind of every man. Our motto is to provide quality education. We not only concentrate on studies but also try to inculcate manners, conduct and good habits as part of a conviction that education is a process of self realization, which stays with a person for life.</p>

            <p>In keeping with the changing approach of modern education, The Yugantar International School emphasizes on teaching through practical application at every stage of our curricula. This makes learning and enjoyable experience and the learning process far easier and an eminently accessible proposition.</p>

            <p>We have set up world class infrastructure, state-of-the-art laboratories, technology enabled class-rooms and high-tech campus, built international standard grounds, courts and an environment that is conducive to individual growth. We have arranged for the best human resources in terms of best faculty, best management and other staff to run the institute so that we can efficiently educate our wards for life.</p>

            <p>We welcome all prospective students and parents to the family of The Yugantar International School.</p>

            <p><strong>Dr. Harish Manglani</strong><br>
            Chairman<br>
            MBBS, MD, Cardiologist &amp; Dialectologist</p>
        `
    },

    director: {
        title: "Director's Message — Er. Vivek Manglani",
        content: `
            <p>Dear Parents and Caregivers,</p>

            <p>Welcome to The Yugantar International School We share the important job of working together to help your child become a responsible citizen and lifelong learner. As parents, your participants and support of the learning process is crucial in your child’s school success. We encourage and to assist our staff by volunteering at classroom and school activities.</p>

            <p>The staff at The Yugantar International School is committed to making our School a place where children feel comfortable, cared for and included. We believe that all children can succeed and that each student be nurtured so that their passion for learning and achieving continue throughout their lifetime.</p>

            <p>Open houses, parent-teacher conferences, special events and subject enrichment activities are all opportunities for us to work together toward your child’s success.</p>

            <p>The Yugantar International School’s Management and staff has prepared the information in this handbook. Its purpose is to acquaint you with The Yugantar International School and its educational programs. Please review the contents of this handbook with your children and save for future use.</p>

            <p>We look forward to an exciting and productivity year, and if you have any questions or corners about our educational program, please call so that we can keep the lines of communication open.</p>

            <p><strong>“Encourage and support your kids because children are apt to live up to what you believe of them.”</strong></p>

            <p>Sincerely,<br>
            <strong>Er. Vivek Manglani</strong><br>
            Director</p>
        `
    },

    principal: {
        title: "Principal's Message — Dr. Parampreet Kaur",
        content: `
            <p><strong>“Education is the awakening of the mind, the strengthening of character, and the illumination of the soul.”</strong></p>

            <p>Dear parents, Guardians and students.</p>

            <p>Welcome to The Yugantar International School — a place where learning inspires excellence, values shape character, and every child is empowered to discover their true potential.</p>

            <p>At our institution, we believe education is not merely the acquisition of knowledge, but the holistic development of mind, body, and spirit. We strive to nurture lifelong learners who are confident, compassionate, self-disciplined, and globally aware citizens prepared to face the challenges of an ever-evolving world.</p>

            <p>Our commitment is to provide a dynamic learning environment enriched with academic excellence, skill development, creativity, sports, spirituality, and value-based education. Through scholastic and co-scholastic experiences, subject enrichment activities, and experiential learning, we encourage every learner to think critically, act responsibly, and grow meaningfully.</p>

            <p>As the Principal, my unwavering belief has always been that dedication, discipline, sincerity, and perseverance lead to true success and inner fulfillment. It is my constant endeavor to guide students toward excellence while nurturing humility, empathy, integrity, and strong moral values.</p>

            <p>Together, let us walk hand in hand to encourage, educate, inspire, and empower our children to become confident global leaders and responsible human beings who will create a brighter tomorrow.</p>

            <p><strong>“Every child has immense potential; education is the journey of helping them realize it.”</strong></p>

            <p><strong>Dr. Parampreet Kaur</strong><br>
            Principal<br>
            The Yugantar International School</p>
        `
    }

};


// OPEN MESSAGE
function openLeaderMessage(person) {

    const message = leadershipMessages[person];

    if (!message) return;

    document.getElementById("modalTitle").textContent = message.title;

    document.getElementById("modalMessage").innerHTML = message.content;

    document.getElementById("leaderModal").classList.add("active");

    document.body.style.overflow = "hidden";
}


// CLOSE MESSAGE
function closeLeaderMessage() {

    document.getElementById("leaderModal").classList.remove("active");

    document.body.style.overflow = "";
}


// CLOSE ON BACKGROUND CLICK
document.getElementById("leaderModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeLeaderMessage();
    }

});


// CLOSE WITH ESCAPE KEY
document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeLeaderMessage();
    }

});