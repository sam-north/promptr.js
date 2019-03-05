function test() {
    console.log('test callback worked');
}

promptr({ confirmCallback: test });