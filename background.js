setInterval(() => {
    if ($("ytd-app") && $("ytd-app").length) {
        
        // Close banner in youtube video
        $('.close-padding') && $('.close-padding').click();
        $('.ytp-ad-overlay-close-button') && $('.ytp-ad-overlay-close-button').click();
    

        // Remove youtube hero Ad banner
        $("ytd-video-masthead-ad-renderer") && $("ytd-video-masthead-ad-renderer").remove();
        $("#masthead-ad") && $("#masthead-ad").remove()

        // Skip advertisement
        $(".videoAdUiSkipButton") && $(".videoAdUiSkipButton").click();
        $(".ytp-ad-skip-button") && $(".ytp-ad-skip-button").click();

    
        // Remove legacy Ad near youtube videos
        $(".ytd-companion-slot-renderer") && $(".ytd-companion-slot-renderer").remove();


        // $(".ytp-ad-preview-text") && $(".ytp-ad-preview-text").length &&  window.location.reload()

    }

    // Remove the google Ads from all websites, mostly won't work
    $("div[id^=google_ads_iframe]") && $("div[id^=google_ads_iframe]").remove()

    // Remove gmail Ad banners
    $(".aKB") && $(".aKB").remove()
    
    // Remove Quora Ad banners
    $('.home_feed_ad').css("display", "none")
   
    // Remove quora sponsored content
    $("div[color='gray_light']:contains('Sponsored by')").parent().parent().parent().hide()
    $("div[color='gray_light']:contains('Promoted by')").parent().parent().parent().hide()

    // Remove "Questions for you", "Discover People", "Discover topics" section in quora
    $('.QuestionStoryBundle').remove()
    $('.SuggestedTribesBundle').remove()
    $('.SuggestedUsersBundle').remove()
    $('.SuggestedTopicsBundle').remove()

   // Remove facebook sponsored Ads
   $("a:contains('Sponsored')").closest("div[id^='hyperfeed_story_id']").remove()

}, 500);
