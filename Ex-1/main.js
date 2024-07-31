// your code here

function fetchData() {
  return Promise.resolve([
    { name: 'بهرام', score: 100 },
    { name: 'فاطمه', score: 70 },
    { name: 'زهرا', score: 80 },
    { name: 'علي', score: 90 },
    { name: 'محمد', score: 40 },
    { name: 'مريم', score: 95 },
    { name: 'مهدي', score: 50 },
    { name: 'حسين', score: 45 },
    { name: 'عليرضا', score: 55 },
    { name: 'محمدرضا', score: 80 },
    { name: 'معصومه', score: 20 },
    { name: 'زينب', score: 60 },
    { name: 'رضا', score: 85 },
    { name: 'اميرحسين', score: 10 },
    { name: 'محمدحسين', score: 35 },
    { name: 'مرضيه', score: 75 },
    { name: 'ابوالفضل', score: 65 },
    { name: 'حسن', score: 90 },
    { name: 'محسن', score: 65 },
    { name: 'محمدمهدي', score: 55 },
    { name: 'صديقه', score: 45 },
    { name: 'زهره', score: 80 },
    { name: 'ليلا', score: 60 },
    { name: 'احمد', score: 65 },
    { name: 'طاهره', score: 65 },
    { name: 'عباس', score: 55 },
    { name: 'اعظم', score: 50 },
    { name: 'سميه', score: 55 },
    { name: 'سعيد', score: 45 },
    { name: 'محمدعلي', score: 65 },
    { name: 'سكينه', score: 85 },
    { name: 'رقيه', score: 80 },
    { name: 'مرتضي', score: 100 },
    { name: 'ريحانه', score: 30 },
    { name: 'نرگس', score: 90 },
    { name: 'مصطفي', score: 100 },
    { name: 'خديجه', score: 95 },
    { name: 'مجيد', score: 55 },
    { name: 'محمدجواد', score: 65 },
  ]);
}

const scoreBoard = document.querySelector('#scoreboard');

const getData = async () => {
  const data = await fetchData();
  scoreBoard.innerHTML = '';

  let html = `
    <table id="scoreboard">
      <thead>
        <tr>
          <th>رتبه</th>
          <th>نام</th>
          <th>نمره</th>
        </tr>
      </thead>
      <tbody>
  `;

  data.sort((a, b) => b.score - a.score);

  const filterData = data.filter((d) => d.score >= 50);

  let currRank = 0;
  let previousScore;

  filterData.forEach((item) => {
    item.score !== previousScore && (currRank = currRank + 1);
    previousScore = item.score;

    html += `
      <tr>
        <td>${currRank}</td>
        <td>${item.name}</td>
        <td>${item.score}</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  scoreBoard.insertAdjacentHTML('beforebegin', html);
};

getData();
