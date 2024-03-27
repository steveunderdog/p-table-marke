document.addEventListener('DOMContentLoaded', function() {
    const planOptionsMark = document.querySelectorAll('.plan-option-mark');
    const planContentsMark = document.querySelectorAll('.plan-content-mark');

    planOptionsMark.forEach(function(option) {
        option.addEventListener('click', function() {
            const selectedPlan = this.getAttribute('data-plan');

            // Update 'selected' class for options
            planOptionsMark.forEach(function(option) {
                option.classList.remove('selected');
            });
            this.classList.add('selected');

            // Toggle 'active' class for contents
            planContentsMark.forEach(function(content) {
                if (content.getAttribute('data-plan') === selectedPlan) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});

// JavaScript for expandable section
document.addEventListener('DOMContentLoaded', function() {
    const expandableSectionMark = document.querySelector('.expandable-section-mark');
    const expandableContentMark = document.querySelector('.expandable-content-mark');

    expandableSectionMark.addEventListener('click', function() {
        expandableContentMark.style.display = expandableContentMark.style.display === 'none' ? 'block' : 'none';
    });
});

// JavaScript for opening schedule embed and hiding package details
document.addEventListener('DOMContentLoaded', function() {
    const founder15BookNowBtnMark = document.getElementById('founder15-book-now-mark');
    const founder15ScheduleEmbedMark = document.getElementById('founder15-schedule-embed-mark');
    const founder15PackageDetailsMark = document.getElementById('founder15-package-details-mark');
    const founder15BackToFeaturesMark = document.getElementById('founder15-back-to-features-mark');

    founder15BookNowBtnMark.addEventListener('click', function(event) {
        event.preventDefault();
        founder15ScheduleEmbedMark.style.display = 'block';
        founder15PackageDetailsMark.style.display = 'none';
        founder15BackToFeaturesMark.style.display = 'block';
    });

    founder15BackToFeaturesMark.addEventListener('click', function() {
        founder15ScheduleEmbedMark.style.display = 'none';
        founder15PackageDetailsMark.style.display = 'block';
        founder15BackToFeaturesMark.style.display = 'none';
    });

    const growthBookNowBtnMark = document.getElementById('growth-book-now-mark');
    const growthScheduleEmbedMark = document.getElementById('growth-schedule-embed-mark');
    const growthPackageDetailsMark = document.getElementById('growth-package-details-mark');
    const growthBackToFeaturesMark = document.getElementById('growth-back-to-features-mark');

    growthBookNowBtnMark.addEventListener('click', function(event) {
        event.preventDefault();
        growthScheduleEmbedMark.style.display = 'block';
        growthPackageDetailsMark.style.display = 'none';
        growthBackToFeaturesMark.style.display = 'block';
    });

    growthBackToFeaturesMark.addEventListener('click', function() {
        growthScheduleEmbedMark.style.display = 'none';
        growthPackageDetailsMark.style.display = 'block';
        growthBackToFeaturesMark.style.display = 'none';
    });

    const accelerateBookNowBtnMark = document.getElementById('accelerate-book-now-mark');
    const accelerateScheduleEmbedMark = document.getElementById('accelerate-schedule-embed-mark');
    const acceleratePackageDetailsMark = document.getElementById('accelerate-package-details-mark');
    const accelerateBackToFeaturesMark = document.getElementById('accelerate-back-to-features-mark');

    accelerateBookNowBtnMark.addEventListener('click', function(event) {
        event.preventDefault();
        accelerateScheduleEmbedMark.style.display = 'block';
        acceleratePackageDetailsMark.style.display = 'none';
        accelerateBackToFeaturesMark.style.display = 'block';
    });

    accelerateBackToFeaturesMark.addEventListener('click', function() {
        accelerateScheduleEmbedMark.style.display = 'none';
        acceleratePackageDetailsMark.style.display = 'block';
        accelerateBackToFeaturesMark.style.display = 'none';
    });
});
