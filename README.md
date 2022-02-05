# Discord.js-Webhook
a Github Action, Full list of Features like footer/icon/....

# What's so different?
well, i've seen all other actions, none of them supports **All** Input of discords like `thumbnails` and `image`, so i made this action.

# Example
```
- name: Discord.js-Webhook
  uses: EhsanFox/djs-actions@0.1.0
  with:
    # Important/Required Data
    id: ${{ secrets.webhook_id }}
    token: ${{ secrets.webhook_token }}

    # Optional Data
    content: Hi, this is a text for the content
    
    # Add more options if u want...
```

# Action Inputs
<table>
    <tr>
        <th>
        Name
        </th>
        <th>
        Optional
        </th>
        <th>
        Description
        </th>
    </tr>
    <tr>
        <td>
        id
        </td>
        <td>
        False
        </td>
        <td>
        ID of the webhook that you recieved from Discord Channel
        </td>
    </tr>
    <tr>
        <td>
        token
        </td>
        <td>
        False
        </td>
        <td>
        Token of the webhook that you recieved from Discord Channel
        </td>
    </tr>
    <tr>
        <td>
        username
        </td>
        <td>
        True
        </td>
        <td>
        Username of the Webhook
        </td>
    </tr>
    <tr>
        <td>
        avatar
        </td>
        <td>
        True
        </td>
        <td>
        a URL for Discord Webhook Avatar, PNG only Allowed
        </td>
    </tr>
    <tr>
        <td>
        content
        </td>
        <td>
        True
        </td>
        <td>
        a Text to Be sent with the Webhook, it's not the embed.
        </td>
    </tr>
    <tr>
        <td>
        title
        </td>
        <td>
        True
        </td>
        <td>
        Title Text which would be on the embed
        </td>
    </tr>
    <tr>
        <td>
        url
        </td>
        <td>
        True
        </td>
        <td>
        URL of The title which is on the embed
        </td>
    </tr>
    <tr>
        <td>
        author
        </td>
        <td>
        True
        </td>
        <td>
        an Author Text which would be on the embed
        </td>
    </tr>
    <tr>
        <td>
        author_icon
        </td>
        <td>
        True
        </td>
        <td>
        Author Icon/Image that would be on the embed
        </td>
    </tr>
    <tr>
        <td>
        author_url
        </td>
        <td>
        True
        </td>
        <td>
        URL of The author which is on the embed
        </td>
    </tr>
    <tr>
        <td>
        footer
        </td>
        <td>
        True
        </td>
        <td>
        Footer Text that would be on the embed
        </td>
    </tr>
    <tr>
        <td>
        footer_icon
        </td>
        <td>
        True
        </td>
        <td>
        Footer Icon/Image that would be on the embed
        </td>
    </tr>
    <tr>
        <td>
        image
        </td>
        <td>
        True
        </td>
        <td>
        Image that would be on the embed
        </td>
    </tr>
    <tr>
        <td>
        thumbnail
        </td>
        <td>
        True
        </td>
        <td>
        Image that would be on the embed as Thumbnail
        </td>
    </tr>
    <tr>
        <td>
        color
        </td>
        <td>
        True
        </td>
        <td>
        Hex Code of a Color that would be on the embed, it would be RANDOM if it's not provided
        </td>
    </tr>
    <tr>
        <td>
        timestamp
        </td>
        <td>
        True
        </td>
        <td>
        Enable Timestamp for the Embed
        </td>
    </tr>
    <tr>
        <td>
        description
        </td>
        <td>
        True
        </td>
        <td>
        a Text for Description of Embed
        </td>
    </tr>
</table>
