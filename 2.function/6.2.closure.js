const age = 16

/// sayAge()  // ReferenceError: sayAge is not defined
// tellAge() // ReferenceError: sayAge is not defined

function init() {
	let age = 10

	function sayAge() {
		console.log(age)
	}

	let tellAge = function() {
		console.log(age)
	}

	sayAge()  // 10
	tellAge() // 10
}

init()
// sayAge()   // ReferenceError: sayAge is not defined, init() 선호출하든 안하든 마찬가지이다.
// tellAge() // ReferenceError: tellAge is not defined