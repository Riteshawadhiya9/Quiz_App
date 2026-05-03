import { dbmsEasy } from './dbms_easy';
import { dbmsModerate } from './dbms_moderate';
import { dbmsHard } from './dbms_hard';
import { dbmsScenario } from './dbms_scenario';

const formatQuestions = (questions, diffLevel, topicName, prefix) => {
  return questions.map((q, idx) => {
    const opts = q.options.map(o => o.replace(/^[A-D]\)\s*/, ''));
    const ansText = q.answer.replace(/^[A-D]\)\s*/, '');
    let ans = opts.findIndex(o => o === ansText);
    if (ans === -1) {
      ans = q.options.findIndex(o => o === q.answer);
    }
    
    return {
      id: `${prefix}${idx + 1}`,
      diff: diffLevel,
      topic: topicName,
      q: q.question,
      opts: opts,
      ans: ans !== -1 ? ans : 0,
      exp: q.explanation
    };
  });
};

export const DBMS_Q = [
  ...formatQuestions(dbmsEasy, 'easy', 'Basics', 'dbms_e_'),
  ...formatQuestions(dbmsModerate, 'medium', 'Advanced', 'dbms_m_'),
  ...formatQuestions(dbmsHard, 'hard', 'Complex', 'dbms_h_'),
  ...formatQuestions(dbmsScenario, 'scenario', 'Scenario', 'dbms_s_')
];
