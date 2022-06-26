
export default function ErrorHandler(props) {
        var today = new Date()
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
        fetch('http://localhost:8000/frontendlog', {
        method: 'POST',
        mode:'no-cors',
        credentials : 'include',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message : props.message,
          dateTime : date+' '+time
        })
      }).then(response => {
        return response.text()})
        .then(res => console.log(res));
      
}