import { reactEasy } from './react_easy';
import { reactModerate } from './react_moderate';
import { reactHard } from './react_hard';
import { reactScenario } from './react_scenario';
import { reactExtra1 } from './react_extra_1';
import { reactExtra2 } from './react_extra_2';

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

export const REACT_Q = [
  ...formatQuestions(reactEasy, 'easy', 'React Basics', 'react_e_'),
  ...formatQuestions(reactModerate, 'medium', 'Hooks & State', 'react_m_'),
  ...formatQuestions(reactHard, 'hard', 'Performance & Refs', 'react_h_'),
  ...formatQuestions(reactScenario, 'scenario', 'Debugging', 'react_s_'),
  ...formatQuestions(reactExtra1, 'hard', 'Advanced Core', 'react_x1_'),
  ...formatQuestions(reactExtra2, 'scenario', 'Advanced Scenarios', 'react_x2_')
];
