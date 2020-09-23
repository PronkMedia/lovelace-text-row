# Lovelace Text Row
Add a simple (styled) text to a row of the [lovelace entities cards](https://www.home-assistant.io/lovelace/entities/), this can be used to add subheaders or explanatory text.

## Installation
1. Copy the [latest release](https://github.com/PronkMedia/lovelace-text-row/releases/latest) of `text-row.js` into your `config/www` directory.
2. Add a reference to `text-row.js` inside your configuration:
```yaml
resources:
- url: /local/text-row.js?v=0.0.1
  type: module
```

## Usage

### Options
| Name | Type | Default | Description |
|------|:----:|:-------:|-------------|
| text ***(required)*** | string |  | The text that will be be showed.
| style | map | color: var(--primary-text-color), margin-left: 8px; | Style the showed text using CSS.

### Example
Add `text-row` to an entities card:
```yaml
type: entities
entities:
  - light.spots
  - type: divider
  - type: custom:text-row
    text: This is an unstyled example text
  - type: custom:text-row
    text: This is a red styled example text without left margin
    style:
      color: red
      margin-left: 0
  - type: custom:text-row
    text: This is bigger and blue styled example text
    style:
      color: '#0000ff'
      font-size: '20px'
  - type: custom:text-row
    text: This very long styled example text is using a theme variable as color and an even bigger left margin
    style:
      color: var(--accent-color)
      margin-left: '16px;'
```
![text-row](https://user-images.githubusercontent.com/697093/94021712-9e4cdf00-fdb4-11ea-9694-bf92895bfdbd.png)

## Credits
[thomasloven](https://github.com/thomasloven) for creating [lovelace-card-tools](https://github.com/thomasloven/lovelace-card-tools).
