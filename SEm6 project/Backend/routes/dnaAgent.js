import express from 'express';
import {
  dnaAgentConfigs,
  evaluatePatient,
  runAgent,
  titleCase,
} from '../../../src/data/dnaAgents.js';

const router = express.Router();

router.get('/configs', (req, res) => {
  res.json({ success: true, agents: dnaAgentConfigs });
});

router.post('/patient/evaluate', (req, res) => {
  const patient = req.body?.patient || {};
  const evaluation = evaluatePatient(patient);
  res.json({
    success: true,
    evaluation,
    patientSummary: Object.entries(patient).map(([key, value]) => ({
      label: titleCase(key),
      value: value || 'Not provided',
    })),
  });
});

router.post('/run/:agentId', (req, res) => {
  const { agentId } = req.params;
  const formData = req.body?.formData || {};
  const patient = req.body?.patient || {};
  const output = runAgent(agentId, formData, patient);
  const evaluation = evaluatePatient({ ...patient, ...formData });
  res.json({ success: true, output, evaluation });
});

export default router;
