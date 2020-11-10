# Password checking API

`GET https://password-check-api.herokuapp.com/check/<password>`

Root URL: https://password-check-api.herokuapp.com/check/

Example:

```javascript
fetch("https://password-check-api.herokuapp.com/check/sadasda")
      .then(res => res.json())
      .then(data => console.log(data))
```

response:
`{
  pw: "sadasda", 
  passed: 1
  total: 5
}`

```javascript
fetch("https://password-check-api.herokuapp.com/check/aS2#caliCa")
      .then(res => res.json())
      .then(data => console.log(data))
```

response:
`{
  pw: "aS2#caliCa", 
  passed: 5
  total: 5
}`

Password checker checks for:
<ul>
<li>lower case a-z</li>
<li>upper case a-z</li>
<li>Numbers 0-9</li>
<li>Special Chars: $@#&!</li>
<li>Password length greater than 8</li>
</ul>
