import { jsEasy } from './js_easy';
import { jsModerate } from './js_moderate';
import { jsHard } from './js_hard';
import { jsScenario } from './js_scenario';
import { jsExtra } from './js_extra';

const formatQuestions = (questions, defaultDiffLevel, defaultTopicName, prefix) => {
  return questions.map((q, idx) => {
    const opts = q.options.map(o => o.replace(/^[A-D]\)\s*/, ''));
    const ansText = q.answer.replace(/^[A-D]\)\s*/, '');
    let ans = opts.findIndex(o => o === ansText);
    if (ans === -1) {
      ans = q.options.findIndex(o => o === q.answer);
    }
    
    return {
      id: `${prefix}${idx + 1}`,
      diff: q.diff || defaultDiffLevel,
      topic: q.topic || defaultTopicName,
      q: q.question,
      opts: opts,
      ans: ans !== -1 ? ans : 0,
      exp: q.explanation
    };
  });
};

export const JS_Q = [
  ...formatQuestions(jsEasy, 'easy', 'Basics', 'js_e_'),
  ...formatQuestions(jsModerate, 'medium', 'Functions & Objects', 'js_m_'),
  ...formatQuestions(jsHard, 'hard', 'Async & Prototypes', 'js_h_'),
  ...formatQuestions(jsScenario, 'scenario', 'Scenario', 'js_s_'),
  ...formatQuestions(jsExtra, 'medium', 'Misc', 'js_ex_')
];
