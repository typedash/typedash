# GitHub Actions

General purpose notes about GitHub Actions usage.

## Slack Notifications

We're using the [slack-github-action](https://github.com/slackapi/slack-github-action) to post messages to `chat.postMessage` endpoint for Slack using a custom app. If you would like to modify any of the notifications, look in the repo you want to modify for the `.github/workflows/` folder for that repo's jobs. Find the job you want and look for the Slack notification step and the `payload` that is being sent. You can modify the blocks in-line or copy it out to the [Slack Block Kit Builder](https://app.slack.com/block-kit-builder/). In there you can modify the notification with a live preview of your changes. When you're done, paste it back into the job and commit your code.

### Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions/learn-github-actions)
- [GitHub Actions Action For Notifications](https://github.com/slackapi/slack-github-action)
- [typedash GitHub Actions Slack App](https://api.slack.com/apps/A031ED13SHG)
- [Slack Chat Post Endpoint](https://api.slack.com/methods/chat.postMessage)
- [Slack Block Kit Builder](https://app.slack.com/block-kit-builder/)
