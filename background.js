setInterval(() => {
    if ($("ytd-app")) {
        // Close banner in youtube video
        $('.close-padding') && $('.close-padding').click();
        $('.ytp-ad-overlay-close-button') && $('.ytp-ad-overlay-close-button').click();
    

        // Remove youtube hero ad banner
        $("iframe") && $("iframe").remove();
    
        // Skip advertisement
        $(".videoAdUiSkipButton") && $(".videoAdUiSkipButton").click();
        $(".ytp-ad-skip-button") && $(".ytp-ad-skip-button").click();

    
        // Remove legacy add near youtube videos
        $(".ytd-companion-slot-renderer") && $(".ytd-companion-slot-renderer").remove();
    }

    // Remove the google ads from all websites
    $("div[id^=google_ads_iframe]") && $("div[id^=google_ads_iframe]").remove()
    
}, 500);
