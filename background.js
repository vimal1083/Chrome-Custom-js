setInterval(() => {
    if ($("ytd-app")) {
        // Close banner in youtube video
        $('.close-padding').click();
    
        // Remove youtube hero ad banner
        $("iframe").remove();
    
        // Skip advertisement
        $(".videoAdUiSkipButton").click();
    
        // Remove legacy add near youtube videos
        $(".ytd-companion-slot-renderer").remove();
    }

    // Remove the google ads from all websites
    $("div[id^=google_ads_iframe]").remove()
    
}, 500);
