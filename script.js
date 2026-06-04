const PptxGenJS = require('/home/claude/.npm-global/lib/node_modules/pptxgenjs');

const pres = new PptxGenJS();
pres.layout = 'LAYOUT_16x9';
pres.title = 'SNS 언어 속 단어의 의미 관계 탐구';

// Color palette: clean academic style
const C = {
  navy:    '1B3A6B',   // deep navy – dominant
  sky:     '3B82F6',   // blue accent
  lightBg: 'F0F4FA',   // very light blue background for content slides
  white:   'FFFFFF',
  dark:    '1E293B',   // near-black text
  mid:     '475569',   // mid gray
  light:   '94A3B8',   // light label
  accent:  'F59E0B',   // amber accent for highlights
  green:   '059669',
  red:     'DC2626',
};

const makeShadow = () => ({ type: 'outer', blur: 8, offset: 2, angle: 135, color: '000000', opacity: 0.10 });

// ─── SLIDE 1: Title ──────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navy };

  // Decorative rect top-right
  s.addShape(pres.shapes.RECTANGLE, { x: 7.5, y: 0, w: 2.5, h: 5.625, fill: { color: '243F7A' }, line: { color: '243F7A' } });
  s.addShape(pres.shapes.RECTANGLE, { x: 8.5, y: 0, w: 1.5, h: 5.625, fill: { color: '2D4D8F' }, line: { color: '2D4D8F' } });

  // Accent bar
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 1.55, w: 0.08, h: 2.5, fill: { color: C.accent }, line: { color: C.accent } });

  // Title
  s.addText('SNS·인터넷 언어 속', {
    x: 0.82, y: 1.5, w: 6.5, h: 0.7,
    fontSize: 30, bold: true, color: C.white, fontFace: 'Malgun Gothic',
    margin: 0
  });
  s.addText('단어의 의미 관계 탐구', {
    x: 0.82, y: 2.15, w: 6.5, h: 0.75,
    fontSize: 30, bold: true, color: C.accent, fontFace: 'Malgun Gothic',
    margin: 0
  });

  // Subtitle
  s.addText('화법과 언어  |  실생활 속 문법 현상 탐구 보고서', {
    x: 0.82, y: 3.1, w: 6.5, h: 0.45,
    fontSize: 13, color: 'A0B4D6', fontFace: 'Malgun Gothic', margin: 0
  });

  // Small tag chips
  const tags = ['다의어', '동음이의어', '유의어', '반의어', '상하위어'];
  tags.forEach((t, i) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.82 + i * 1.3, y: 4.0, w: 1.2, h: 0.38,
      fill: { color: '2A4F8C' }, line: { color: '3B6BB5' }, rectRadius: 0.08
    });
    s.addText(t, {
      x: 0.82 + i * 1.3, y: 4.0, w: 1.2, h: 0.38,
      fontSize: 10, color: 'C5D8F5', align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0
    });
  });

  // Year
  s.addText('2025학년도  고등학교 2학년', {
    x: 0.82, y: 4.85, w: 5, h: 0.35,
    fontSize: 11, color: '6B8EC4', fontFace: 'Malgun Gothic', margin: 0
  });
}

// ─── SLIDE 2: 목차 ─────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.white };

  s.addText('목 차', {
    x: 0.5, y: 0.3, w: 9, h: 0.7,
    fontSize: 28, bold: true, color: C.navy, fontFace: 'Malgun Gothic',
    align: 'center', margin: 0
  });

  const items = [
    ['01', '탐구 동기 및 목적', '왜 SNS 언어를 선택했는가?'],
    ['02', '탐구 대상 및 방법', '탐구 언어 자료 소개'],
    ['03', '다의어 분석', '"배다", "먹다"의 다양한 의미'],
    ['04', '동음이의어 분석', '"배" – 세 가지 다른 단어'],
    ['05', '유의어·반의어 분석', '"좋다/나쁘다", "행복/불행"'],
    ['06', '상하위어 분석', '"SNS > 플랫폼 > 기능"'],
    ['07', '탐구 결과 및 성찰', '언어와 사회의 연결'],
  ];

  items.forEach(([num, title, sub], i) => {
    const row = Math.floor(i / 2);
    const col = i % 2;
    const bx = col === 0 ? 0.45 : 5.25;
    const by = 1.3 + row * 1.2;
    const bw = 4.4;
    const bh = 0.95;

    if (i === 6) { // last item centered
      s.addShape(pres.shapes.RECTANGLE, {
        x: 2.8, y: by, w: bw, h: bh,
        fill: { color: 'E8F0FB' }, line: { color: 'C5D8F5' }, shadow: makeShadow()
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: 2.8, y: by, w: 0.06, h: bh,
        fill: { color: C.navy }, line: { color: C.navy }
      });
      s.addText(num, { x: 2.95, y: by + 0.08, w: 0.5, h: 0.35, fontSize: 18, bold: true, color: C.sky, fontFace: 'Malgun Gothic', margin: 0 });
      s.addText(title, { x: 3.5, y: by + 0.06, w: 3.5, h: 0.35, fontSize: 13, bold: true, color: C.dark, fontFace: 'Malgun Gothic', margin: 0 });
      s.addText(sub, { x: 3.5, y: by + 0.45, w: 3.5, h: 0.3, fontSize: 10, color: C.mid, fontFace: 'Malgun Gothic', margin: 0 });
    } else {
      s.addShape(pres.shapes.RECTANGLE, {
        x: bx, y: by, w: bw, h: bh,
        fill: { color: 'E8F0FB' }, line: { color: 'C5D8F5' }, shadow: makeShadow()
      });
      s.addShape(pres.shapes.RECTANGLE, {
        x: bx, y: by, w: 0.06, h: bh,
        fill: { color: C.navy }, line: { color: C.navy }
      });
      s.addText(num, { x: bx + 0.15, y: by + 0.08, w: 0.5, h: 0.35, fontSize: 18, bold: true, color: C.sky, fontFace: 'Malgun Gothic', margin: 0 });
      s.addText(title, { x: bx + 0.7, y: by + 0.06, w: bw - 0.8, h: 0.35, fontSize: 13, bold: true, color: C.dark, fontFace: 'Malgun Gothic', margin: 0 });
      s.addText(sub, { x: bx + 0.7, y: by + 0.45, w: bw - 0.8, h: 0.3, fontSize: 10, color: C.mid, fontFace: 'Malgun Gothic', margin: 0 });
    }
  });
}

// ─── Helper: slide header ──────────────────────────────────────────────────
function addHeader(s, num, title) {
  s.background = { color: C.white };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.85, fill: { color: C.navy }, line: { color: C.navy } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0.85, w: 10, h: 0.06, fill: { color: C.accent }, line: { color: C.accent } });
  s.addText(num, { x: 0.4, y: 0.1, w: 0.6, h: 0.65, fontSize: 11, color: C.accent, bold: true, fontFace: 'Malgun Gothic', valign: 'middle', margin: 0 });
  s.addText(title, { x: 1.05, y: 0.1, w: 8.5, h: 0.65, fontSize: 20, bold: true, color: C.white, fontFace: 'Malgun Gothic', valign: 'middle', margin: 0 });
}

// ─── SLIDE 3: 서론 – 탐구 동기 ─────────────────────────────────────────────
{
  const s = pres.addSlide();
  addHeader(s, '01', '탐구 동기 및 목적');

  // Left text block
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 1.1, w: 5.6, h: 3.9, fill: { color: C.lightBg }, line: { color: 'D1DFF7' }, shadow: makeShadow() });
  s.addText([
    { text: '탐구 배경\n', options: { bold: true, fontSize: 13, color: C.navy, breakLine: false } },
    { text: '평소 카카오톡, 인스타그램, 유튜브 댓글 등 SNS에서 자주 접하는 표현들을 살펴보다 같은 단어가 맥락에 따라 전혀 다른 뜻으로 쓰이거나, 발음은 같지만 완전히 다른 의미를 가진 단어들이 충돌하는 현상에 흥미를 느꼈다.\n\n', options: { fontSize: 11.5, color: C.dark, breakLine: false } },
    { text: '탐구 목적\n', options: { bold: true, fontSize: 13, color: C.navy, breakLine: false } },
    { text: '실생활의 SNS·인터넷 언어 속에서 다의어, 동음이의어, 유의어, 반의어, 상하위어 등 단어의 의미 관계가 어떻게 나타나는지 분석하고, 국어 규범적 관점에서 그 특징과 의의를 탐구한다.', options: { fontSize: 11.5, color: C.dark } },
  ], { x: 0.65, y: 1.25, w: 5.1, h: 3.6, fontFace: 'Malgun Gothic', valign: 'top' });

  // Right: SNS examples callout
  s.addShape(pres.shapes.RECTANGLE, { x: 6.3, y: 1.1, w: 3.3, h: 3.9, fill: { color: C.navy }, line: { color: C.navy }, shadow: makeShadow() });
  s.addText('SNS 속 의문의 표현들', { x: 6.3, y: 1.15, w: 3.3, h: 0.45, fontSize: 12, bold: true, color: C.accent, align: 'center', fontFace: 'Malgun Gothic', margin: 0 });

  const examples = [
    '"배 터진다" 😂',
    '"진짜 배고픈 내용"',
    '"이거 완전 꿀맛"',
    '"꿀잠 잤다"',
    '"갓생 사는 중"',
    '"레전드 영상"',
  ];
  examples.forEach((ex, i) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.5, y: 1.7 + i * 0.53, w: 2.9, h: 0.42,
      fill: { color: '243F7A' }, line: { color: '3B6BB5' }, rectRadius: 0.06
    });
    s.addText(ex, { x: 6.5, y: 1.7 + i * 0.53, w: 2.9, h: 0.42, fontSize: 11, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
  });
}

// ─── SLIDE 4: 탐구 대상 및 방법 ────────────────────────────────────────────
{
  const s = pres.addSlide();
  addHeader(s, '02', '탐구 대상 및 방법');

  const cols = [
    { title: '탐구 대상', color: '1B3A6B', items: ['카카오톡 오픈채팅 텍스트', '인스타그램 해시태그', '유튜브 댓글·자막', '온라인 커뮤니티(에브리타임 등)', '광고 카피·배너 문구'] },
    { title: '탐구 영역', color: '065A82', items: ['다의어 – 여러 의미를 가진 단어', '동음이의어 – 소리는 같지만 뜻이 다른 단어', '유의어 – 의미가 비슷한 단어들', '반의어 – 의미가 반대되는 단어들', '상하위어 – 의미 포함 관계'] },
    { title: '분석 기준', color: '028090', items: ['표준국어대사전 뜻풀이 대조', '한글 맞춤법·표준어 규정', '문맥별 의미 변화 분석', '사전적 의미 vs 사회적 의미 비교'] },
  ];

  cols.forEach((col, ci) => {
    const cx = 0.35 + ci * 3.2;
    s.addShape(pres.shapes.RECTANGLE, { x: cx, y: 1.05, w: 3.0, h: 0.5, fill: { color: col.color }, line: { color: col.color } });
    s.addText(col.title, { x: cx, y: 1.05, w: 3.0, h: 0.5, fontSize: 14, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: cx, y: 1.55, w: 3.0, h: 3.7, fill: { color: C.lightBg }, line: { color: 'C5D8F5' } });
    col.items.forEach((item, ii) => {
      s.addShape(pres.shapes.OVAL, { x: cx + 0.15, y: 1.72 + ii * 0.65, w: 0.18, h: 0.18, fill: { color: col.color }, line: { color: col.color } });
      s.addText(item, { x: cx + 0.42, y: 1.67 + ii * 0.65, w: 2.5, h: 0.55, fontSize: 10.5, color: C.dark, fontFace: 'Malgun Gothic', valign: 'middle', margin: 0 });
    });
  });
}

// ─── SLIDE 5: 다의어 분석 ──────────────────────────────────────────────────
{
  const s = pres.addSlide();
  addHeader(s, '03', '다의어 분석 – "배다", "먹다"');

  // "배다" card
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.05, w: 4.4, h: 4.2, fill: { color: C.lightBg }, line: { color: 'C5D8F5' }, shadow: makeShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.05, w: 4.4, h: 0.55, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText('다의어  "배다"', { x: 0.35, y: 1.05, w: 4.4, h: 0.55, fontSize: 14, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });

  const baeData = [
    ['의미 ①', '냄새나 빛이 스미다', '"옷에 땀이 배다"'],
    ['의미 ②', '임신하다 (새끼 배다)', '"암캐가 새끼를 뱄다"'],
    ['의미 ③', '익숙해지다 (몸에 배다)', '"거짓말이 몸에 배었어"'],
  ];
  baeData.forEach(([label, meaning, ex], i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.75 + i * 1.1, w: 4.1, h: 0.9, fill: { color: 'FFFFFF' }, line: { color: 'D1DFF7' } });
    s.addText(label, { x: 0.6, y: 1.78 + i * 1.1, w: 0.8, h: 0.35, fontSize: 10, bold: true, color: C.sky, fontFace: 'Malgun Gothic', margin: 0 });
    s.addText(meaning, { x: 1.45, y: 1.78 + i * 1.1, w: 3.0, h: 0.35, fontSize: 11, bold: true, color: C.dark, fontFace: 'Malgun Gothic', margin: 0 });
    s.addText(ex, { x: 1.45, y: 2.13 + i * 1.1, w: 3.0, h: 0.35, fontSize: 10, color: C.mid, italic: true, fontFace: 'Malgun Gothic', margin: 0 });
  });

  // "먹다" card
  s.addShape(pres.shapes.RECTANGLE, { x: 5.25, y: 1.05, w: 4.4, h: 4.2, fill: { color: C.lightBg }, line: { color: 'C5D8F5' }, shadow: makeShadow() });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.25, y: 1.05, w: 4.4, h: 0.55, fill: { color: '065A82' }, line: { color: '065A82' } });
  s.addText('다의어  "먹다"', { x: 5.25, y: 1.05, w: 4.4, h: 0.55, fontSize: 14, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });

  const meokData = [
    ['의미 ①', '음식을 섭취하다', '"밥 먹었어?"  (SNS 일상 표현)'],
    ['의미 ②', '겁을 먹다 (감정)', '"댓글 보고 겁을 먹었어"'],
    ['의미 ③', '나이를 먹다 (경과)', '"나이 먹을수록 현명해져"'],
    ['의미 ④', '욕을 먹다 (비난)', '"오늘 커뮤에서 욕 먹었다"'],
  ];
  meokData.forEach(([label, meaning, ex], i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 5.4, y: 1.75 + i * 0.83, w: 4.1, h: 0.7, fill: { color: 'FFFFFF' }, line: { color: 'D1DFF7' } });
    s.addText(label, { x: 5.5, y: 1.78 + i * 0.83, w: 0.8, h: 0.28, fontSize: 9.5, bold: true, color: C.sky, fontFace: 'Malgun Gothic', margin: 0 });
    s.addText(meaning, { x: 6.3, y: 1.78 + i * 0.83, w: 3.1, h: 0.28, fontSize: 11, bold: true, color: C.dark, fontFace: 'Malgun Gothic', margin: 0 });
    s.addText(ex, { x: 6.3, y: 2.06 + i * 0.83, w: 3.1, h: 0.28, fontSize: 9.5, color: C.mid, italic: true, fontFace: 'Malgun Gothic', margin: 0 });
  });

  // SNS 사용 note
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 5.15, w: 9.3, h: 0.28, fill: { color: 'FEF3C7' }, line: { color: 'FDE68A' } });
  s.addText('⚠ SNS에서는 다의어의 의미가 맥락 없이 사용되어 오해가 생기는 경우도 많다 → 문맥 파악 능력의 중요성', {
    x: 0.5, y: 5.15, w: 9.0, h: 0.28, fontSize: 9.5, color: '92400E', fontFace: 'Malgun Gothic', valign: 'middle', margin: 0
  });
}

// ─── SLIDE 6: 동음이의어 ───────────────────────────────────────────────────
{
  const s = pres.addSlide();
  addHeader(s, '04', '동음이의어 분석 – "배"의 세 가지 의미');

  const cards = [
    { label: '배¹', hanja: '(腹)', meaning: '신체의 복부', ex: '"배 고프다" "배 터지겠다"', icon: '🍽', color: C.navy },
    { label: '배²', hanja: '(船)', meaning: '물 위를 다니는 탈것', ex: '"배 탔어?" "배 멀미"', icon: '⛵', color: '065A82' },
    { label: '배³', hanja: '(梨)', meaning: '과일의 한 종류', ex: '"배 먹을래?" "배 주스"', icon: '🍐', color: '028090' },
  ];

  cards.forEach((card, i) => {
    const cx = 0.4 + i * 3.2;
    s.addShape(pres.shapes.RECTANGLE, { x: cx, y: 1.05, w: 2.9, h: 4.2, fill: { color: C.lightBg }, line: { color: 'C5D8F5' }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: cx, y: 1.05, w: 2.9, h: 0.65, fill: { color: card.color }, line: { color: card.color } });
    s.addText(card.label + ' ' + card.hanja, { x: cx, y: 1.05, w: 2.9, h: 0.65, fontSize: 15, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });

    s.addText(card.icon, { x: cx + 0.9, y: 1.85, w: 1.1, h: 0.9, fontSize: 36, align: 'center', margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: cx + 0.15, y: 2.9, w: 2.6, h: 0.5, fill: { color: 'FFFFFF' }, line: { color: 'D1DFF7' } });
    s.addText('의미', { x: cx + 0.2, y: 2.92, w: 0.5, h: 0.22, fontSize: 9, bold: true, color: card.color, fontFace: 'Malgun Gothic', margin: 0 });
    s.addText(card.meaning, { x: cx + 0.72, y: 2.92, w: 2.0, h: 0.46, fontSize: 11, bold: true, color: C.dark, valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });

    s.addShape(pres.shapes.RECTANGLE, { x: cx + 0.15, y: 3.52, w: 2.6, h: 0.7, fill: { color: 'FFFFFF' }, line: { color: 'D1DFF7' } });
    s.addText('SNS 예시', { x: cx + 0.2, y: 3.54, w: 0.8, h: 0.22, fontSize: 9, bold: true, color: card.color, fontFace: 'Malgun Gothic', margin: 0 });
    s.addText(card.ex, { x: cx + 0.2, y: 3.75, w: 2.4, h: 0.4, fontSize: 10, italic: true, color: C.mid, fontFace: 'Malgun Gothic', margin: 0 });
  });

  // Bottom comparison arrow
  s.addShape(pres.shapes.RECTANGLE, { x: 0.4, y: 5.05, w: 9.2, h: 0.35, fill: { color: 'FEF3C7' }, line: { color: 'FDE68A' } });
  s.addText([
    { text: '핵심: ', options: { bold: true, color: '92400E' } },
    { text: '동음이의어는 소리는 동일하지만 서로 다른 단어(별개의 어휘)이므로, 사전에 각각 별도의 표제어로 등재된다.', options: { color: '92400E' } },
  ], { x: 0.55, y: 5.05, w: 9.0, h: 0.35, fontSize: 10, fontFace: 'Malgun Gothic', valign: 'middle', margin: 0 });
}

// ─── SLIDE 7: 유의어·반의어 ────────────────────────────────────────────────
{
  const s = pres.addSlide();
  addHeader(s, '05', '유의어 · 반의어 분석');

  // Synonyms (left)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.05, w: 4.5, h: 0.52, fill: { color: C.green }, line: { color: C.green } });
  s.addText('유의어 (類義語) – SNS 감정 표현', { x: 0.35, y: 1.05, w: 4.5, h: 0.52, fontSize: 13, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 1.57, w: 4.5, h: 3.7, fill: { color: C.lightBg }, line: { color: 'C5D8F5' } });

  const synGroups = [
    { base: '"좋다"의 유의어', words: ['훌륭하다', '뛰어나다', '근사하다', '(SNS) 갓이다', '(신조어) 레전드다'] },
    { base: '"바쁘다"의 유의어', words: ['분주하다', '정신없다', '(SNS) 미치겠다', '(신조어) 열일하다'] },
  ];
  synGroups.forEach((grp, gi) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7 + gi * 1.7, w: 4.2, h: 0.32, fill: { color: C.green }, line: { color: C.green } });
    s.addText(grp.base, { x: 0.5, y: 1.7 + gi * 1.7, w: 4.2, h: 0.32, fontSize: 11, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
    grp.words.forEach((w, wi) => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.6 + (wi % 3) * 1.35, y: 2.1 + gi * 1.7 + Math.floor(wi / 3) * 0.5, w: 1.25, h: 0.38,
        fill: { color: 'DCFCE7' }, line: { color: '86EFAC' }, rectRadius: 0.06
      });
      s.addText(w, {
        x: 0.6 + (wi % 3) * 1.35, y: 2.1 + gi * 1.7 + Math.floor(wi / 3) * 0.5, w: 1.25, h: 0.38,
        fontSize: 9.5, color: '166534', align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0
      });
    });
  });

  // Antonyms (right)
  s.addShape(pres.shapes.RECTANGLE, { x: 5.15, y: 1.05, w: 4.5, h: 0.52, fill: { color: C.red }, line: { color: C.red } });
  s.addText('반의어 (反義語) – 대립 표현', { x: 5.15, y: 1.05, w: 4.5, h: 0.52, fontSize: 13, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.15, y: 1.57, w: 4.5, h: 3.7, fill: { color: C.lightBg }, line: { color: 'C5D8F5' } });

  const antPairs = [
    ['행복하다', '불행하다', '방향 반의어\n(정반대 감정)'],
    ['오르다', '내리다', '방향 반의어\n(이동 방향)'],
    ['많다', '적다', '정도 반의어\n(중간 단계 있음)'],
    ['살다', '죽다', '상보 반의어\n(중간 없음)'],
  ];
  antPairs.forEach(([w1, w2, type], i) => {
    const row = i;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 1.75 + row * 0.85, w: 1.25, h: 0.52, fill: { color: 'FEE2E2' }, line: { color: 'FCA5A5' } });
    s.addText(w1, { x: 5.3, y: 1.75 + row * 0.85, w: 1.25, h: 0.52, fontSize: 12, bold: true, color: C.red, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
    s.addText('↔', { x: 6.6, y: 1.78 + row * 0.85, w: 0.5, h: 0.45, fontSize: 16, bold: true, color: C.mid, align: 'center', fontFace: 'Malgun Gothic', margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 7.15, y: 1.75 + row * 0.85, w: 1.25, h: 0.52, fill: { color: 'FEE2E2' }, line: { color: 'FCA5A5' } });
    s.addText(w2, { x: 7.15, y: 1.75 + row * 0.85, w: 1.25, h: 0.52, fontSize: 12, bold: true, color: C.red, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
    s.addText(type, { x: 8.45, y: 1.75 + row * 0.85, w: 1.15, h: 0.52, fontSize: 8.5, color: C.mid, italic: true, fontFace: 'Malgun Gothic', valign: 'middle', margin: 0 });
  });

  // SNS note
  s.addShape(pres.shapes.RECTANGLE, { x: 5.3, y: 5.1, w: 4.2, h: 0.3, fill: { color: 'FEE2E2' }, line: { color: 'FCA5A5' } });
  s.addText('SNS에서는 "개좋아 ↔ 개싫어" 처럼 반의어에 강조 접두사가 결합되기도 함', {
    x: 5.3, y: 5.1, w: 4.2, h: 0.3, fontSize: 8.5, color: '7F1D1D', fontFace: 'Malgun Gothic', valign: 'middle', margin: 0
  });
}

// ─── SLIDE 8: 상하위어 ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  addHeader(s, '06', '상하위어 분석 – SNS 플랫폼 어휘 체계');

  // Hierarchy tree
  // Level 0: SNS (top)
  s.addShape(pres.shapes.RECTANGLE, { x: 3.6, y: 1.1, w: 2.8, h: 0.6, fill: { color: C.navy }, line: { color: C.navy }, shadow: makeShadow() });
  s.addText('SNS (상위어)', { x: 3.6, y: 1.1, w: 2.8, h: 0.6, fontSize: 14, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });

  // Lines down
  s.addShape(pres.shapes.LINE, { x: 5.0, y: 1.7, w: 0, h: 0.4, line: { color: C.mid, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: 5.0, y: 2.1, w: -3.0, h: 0, line: { color: C.mid, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: 5.0, y: 2.1, w: 3.0, h: 0, line: { color: C.mid, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: 2.0, y: 2.1, w: 0, h: 0.3, line: { color: C.mid, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: 5.0, y: 2.1, w: 0, h: 0.3, line: { color: C.mid, width: 1.5 } });
  s.addShape(pres.shapes.LINE, { x: 8.0, y: 2.1, w: 0, h: 0.3, line: { color: C.mid, width: 1.5 } });

  // Level 1: platforms
  const platforms = [
    { name: '동영상 플랫폼\n(유튜브, 틱톡)', x: 0.9 },
    { name: '사진·글 플랫폼\n(인스타그램)', x: 3.85 },
    { name: '메시지 플랫폼\n(카카오톡)', x: 6.85 },
  ];
  platforms.forEach((p) => {
    s.addShape(pres.shapes.RECTANGLE, { x: p.x, y: 2.4, w: 2.25, h: 0.65, fill: { color: '065A82' }, line: { color: '065A82' } });
    s.addText(p.name, { x: p.x, y: 2.4, w: 2.25, h: 0.65, fontSize: 10.5, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
  });

  // Lines to level 2
  const l2xs = [2.025, 4.975, 7.975];
  l2xs.forEach(lx => {
    s.addShape(pres.shapes.LINE, { x: lx, y: 3.05, w: 0, h: 0.3, line: { color: C.mid, width: 1.5 } });
  });

  // Level 2: features
  const features = [
    ['댓글', '좋아요', '구독'],
    ['팔로우', '스토리', '릴스'],
    ['채팅방', '이모티콘', '오픈채팅'],
  ];
  features.forEach((feats, fi) => {
    const baseX = 0.3 + fi * 3.0;
    feats.forEach((feat, fii) => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: baseX + fii * 0.9, y: 3.35, w: 0.82, h: 0.4,
        fill: { color: 'DBEAFE' }, line: { color: '93C5FD' }, rectRadius: 0.06
      });
      s.addText(feat, { x: baseX + fii * 0.9, y: 3.35, w: 0.82, h: 0.4, fontSize: 9.5, color: C.navy, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
    });
  });

  // Labels
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 1.15, w: 0.85, h: 0.5, fill: { color: C.accent }, line: { color: C.accent } });
  s.addText('1단계', { x: 0, y: 1.15, w: 0.85, h: 0.5, fontSize: 9, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 2.4, w: 0.85, h: 0.65, fill: { color: '028090' }, line: { color: '028090' } });
  s.addText('2단계', { x: 0, y: 2.4, w: 0.85, h: 0.65, fontSize: 9, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 3.35, w: 0.85, h: 0.4, fill: { color: '059669' }, line: { color: '059669' } });
  s.addText('3단계', { x: 0, y: 3.35, w: 0.85, h: 0.4, fontSize: 9, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });

  // Explanation box
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 4.0, w: 9.3, h: 1.35, fill: { color: C.lightBg }, line: { color: 'C5D8F5' } });
  s.addText([
    { text: '상위어 / 하위어의 특성\n', options: { bold: true, fontSize: 12, color: C.navy } },
    { text: '① 상위어(SNS)는 하위어(유튜브, 인스타그램…)를 의미적으로 포함한다.\n', options: { fontSize: 10.5, color: C.dark } },
    { text: '② 하위어는 상위어보다 의미 범위가 좁고 구체적이다.\n', options: { fontSize: 10.5, color: C.dark } },
    { text: '③ SNS 문화에서 새로운 하위어(예: 숏폼, 릴스)가 지속적으로 생성되며 어휘 체계가 확장된다.', options: { fontSize: 10.5, color: C.dark } },
  ], { x: 0.6, y: 4.08, w: 8.8, h: 1.2, fontFace: 'Malgun Gothic', valign: 'top', margin: 0 });
}

// ─── SLIDE 9: 결론 ────────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  addHeader(s, '07', '탐구 결과 및 성찰');

  // Summary boxes
  const results = [
    { num: '01', title: '다의어', body: 'SNS에서 "먹다", "배다" 등의 다의어는 문맥에 따라 의미가 달라지며, 맥락 의존성이 높다.', color: C.navy },
    { num: '02', title: '동음이의어', body: '"배"처럼 소리가 같지만 별개의 단어인 경우, 글자 언어(SNS)에서는 상대적으로 혼동이 적다.', color: '065A82' },
    { num: '03', title: '유의어', body: 'SNS 신조어는 기존 유의어 목록에 새로운 어휘를 추가하며, 세대·집단 간 언어 분화를 보여 준다.', color: '028090' },
    { num: '04', title: '반의어', body: '"개좋아/개싫어"처럼 기존 반의 관계에 강조 형태소가 결합되는 방식이 SNS에서 활발히 사용된다.', color: C.green },
    { num: '05', title: '상하위어', body: 'SNS 플랫폼 관련 어휘는 상하위어 체계가 빠르게 확장·세분화되고 있으며, 이는 기술 사회 변화를 반영한다.', color: '7C3AED' },
  ];

  results.forEach((r, i) => {
    const row = Math.floor(i / 3);
    const col = i % 3;
    const bx = row === 1 ? 1.5 + col * 3.5 : 0.35 + col * 3.2;
    const by = 1.1 + row * 2.1;
    const bw = row === 1 ? 3.0 : 2.95;

    s.addShape(pres.shapes.RECTANGLE, { x: bx, y: by, w: bw, h: 1.75, fill: { color: C.lightBg }, line: { color: 'C5D8F5' }, shadow: makeShadow() });
    s.addShape(pres.shapes.RECTANGLE, { x: bx, y: by, w: bw, h: 0.45, fill: { color: r.color }, line: { color: r.color } });
    s.addText(r.num + '  ' + r.title, { x: bx, y: by, w: bw, h: 0.45, fontSize: 12, bold: true, color: C.white, align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
    s.addText(r.body, { x: bx + 0.12, y: by + 0.52, w: bw - 0.24, h: 1.15, fontSize: 10, color: C.dark, fontFace: 'Malgun Gothic', valign: 'top', margin: 0 });
  });

  // Reflection
  s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: 5.08, w: 9.3, h: 0.37, fill: { color: C.navy }, line: { color: C.navy } });
  s.addText([
    { text: '성찰: ', options: { bold: true, color: C.accent } },
    { text: 'SNS 언어는 급변하지만, 그 안에서도 단어의 의미 관계라는 국어 문법 원리는 살아 숨 쉬고 있다. 일상 언어 속 문법을 읽어 내는 능력이 곧 국어 능력이다.', options: { color: C.white } },
  ], { x: 0.5, y: 5.08, w: 9.1, h: 0.37, fontSize: 10, fontFace: 'Malgun Gothic', valign: 'middle', margin: 0 });
}

// ─── SLIDE 10: 감사합니다 ──────────────────────────────────────────────────
{
  const s = pres.addSlide();
  s.background = { color: C.navy };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 3.8, w: 10, h: 1.825, fill: { color: '243F7A' }, line: { color: '243F7A' } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 3.8, w: 10, h: 0.06, fill: { color: C.accent }, line: { color: C.accent } });

  s.addText('감사합니다', {
    x: 0.5, y: 1.2, w: 9, h: 1.2,
    fontSize: 48, bold: true, color: C.white, align: 'center', fontFace: 'Malgun Gothic', margin: 0
  });
  s.addText('SNS·인터넷 언어 속 단어의 의미 관계 탐구', {
    x: 0.5, y: 2.5, w: 9, h: 0.5,
    fontSize: 16, color: 'A0B4D6', align: 'center', fontFace: 'Malgun Gothic', margin: 0
  });

  const tags2 = ['다의어', '동음이의어', '유의어', '반의어', '상하위어'];
  tags2.forEach((t, i) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 1.6 + i * 1.4, y: 3.25, w: 1.25, h: 0.38,
      fill: { color: '2A4F8C' }, line: { color: '3B6BB5' }, rectRadius: 0.08
    });
    s.addText(t, { x: 1.6 + i * 1.4, y: 3.25, w: 1.25, h: 0.38, fontSize: 10, color: 'C5D8F5', align: 'center', valign: 'middle', fontFace: 'Malgun Gothic', margin: 0 });
  });

  s.addText('화법과 언어  |  실생활 속 문법 현상 탐구 보고서  |  2025학년도', {
    x: 1, y: 4.8, w: 8, h: 0.4,
    fontSize: 11, color: '6B8EC4', align: 'center', fontFace: 'Malgun Gothic', margin: 0
  });
}

pres.writeFile({ fileName: '/mnt/user-data/outputs/화법과언어_의미관계탐구_PPT.pptx' })
  .then(() => console.log('Done!'))
  .catch(e => console.error(e));
