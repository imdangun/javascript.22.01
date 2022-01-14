let json = '{"age": 30}'

try {
    let user = JSON.parse(json)

    // 과제: a가 출력되게 조건문을 수정하라.
    if(!user.name) {
        console.log('a')
    }
} catch {}