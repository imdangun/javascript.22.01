let json = '{"age": 30}'

try {
    let user = JSON.parse(json)

    // 과제: a가 출력되게 조건문을 수정하라.
    if(!user.name) {
        //console.log('a')
        throw new SyntaxError('user.name이 없습니다.')
    }

    console.log(user.name)
} catch(e) {
    if(e instanceof SyntaxError)
        console.log('JSON error: ' + e.message)
    else throw e
}
// JSON error: user.name이 없습니다.
