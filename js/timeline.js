const timeline = $('.timeline-container')

const dotCount = $('.timeline .timeline-dot').length
const unit = 100 / (dotCount - 1)

const dot = nth => $(`.timeline .timeline-dot:nth-child(${nth})`)

for (i = 1; i <= dotCount; i++) {
    dot(i + 1).css('top', `${unit * i}%`)
}

const timelinePos = timeline.position().top

$(window).scroll(() => {
    if ($(window).scrollTop() >= (timelinePos - 150) && $(window).scrollTop() < (timelinePos + timeline.height())) {
        let positionPercentage = (($(window).scrollTop() - (timelinePos - 500)) / timeline.height()) * 100
        positionPercentage = Math.min(positionPercentage, 100) // Don't Excede 100%
        let mobilePositionPercentage = (($(window).scrollTop() - (timelinePos - 150)) / timeline.height()) * 100
        mobilePositionPercentage = Math.min(mobilePositionPercentage, 100) // Don't Excede 100%
        
        $('.timeline .timeline-color-bar').css('height', `${positionPercentage}%`)
        $('.timeline .mobile-bar').css('height', `${mobilePositionPercentage}%`)
    }
})