    function handleSubmit(event) {
      event.preventDefault(); // Prevents page reload
      const inputVal = event.target.querySelector('input').value;
      alert('Submitted value: ' + inputVal);
    }