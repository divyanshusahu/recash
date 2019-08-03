# Recash

[Live Demo](https://reverent-yonath-41f140.netlify.com/)

### To Do

- Navigation bar between 992px and 1440px
- Navigation bar for small device (ie. below 992px)
- ~~Progress Bar functionality~~
- ~~Information below progress bar~~
- Brand Logo Images
- ~~Save User input in an object and send it to server~~
- SignUp/SignIn from sidebar
- Advance feature in save input with different styling
- SQL database, save user input without array

### How the user input is saved

```javascript
var input = {
  "brand": "Apple",
  "model": "iPhone 6",
  "variant": "64gb",
  "overall_condition": "excellent",
  "display_condition": "good",
  "old_device": "b3",
  "other_issue": ["headphone_isssue", "front_camera_issue"],
  "original_accesories_available": ["charger", "bill", "box"],
  "mobile_number": "0123456789"
}
```