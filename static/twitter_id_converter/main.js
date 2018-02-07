const BASE_URL = 'https://skrm.ch/twitter/id-converter/api/v1';
const CONVERT_SCREEN_NAMES_TO_IDS_URL = `${BASE_URL}/convert_screen_names_to_ids`;
const CONVERT_IDS_TO_SCREEN_NAMES_URL = `${BASE_URL}/convert_ids_to_screen_names`;

document.addEventListener('DOMContentLoaded', setup);

function setup() {
    setClickHandler();
}

function setClickHandler() {
    document.querySelector('#btn_convert_screen_names').addEventListener('click', convertScreenNames);
    document.querySelector('#btn_convert_ids').addEventListener('click', convertIds);
}

function convertScreenNames(e) {
    // screen_nameを取得し、空行の除去などのフォーマットを行う
    const screenNames = document.querySelector('#screen_names')
          .value.split('\n').filter(e => e.length > 0);

    // テキストボックスの更新
    document.querySelector('#screen_names').value = screenNames.join('\n');

    // APIにリクエストを送信
    const body = JSON.stringify({screen_names: screenNames});
    fetch(CONVERT_SCREEN_NAMES_TO_IDS_URL, {
        method: 'POST',
        body,
    }).then(res => res.json()).then(data => {
        const ids = data.ids;
        document.querySelector('#ids').value = ids.join('\n');
    });

}

function convertIds(e) {
}
