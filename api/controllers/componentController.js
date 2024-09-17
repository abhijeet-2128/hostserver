const fs = require('fs');
const path = require('path');

// Get component code
exports.getComponentCode = (req, res) => {
  const componentName = req.params.name;
  const componentPath = path.join(__dirname, '../../components', `${componentName}.js`);

  fs.readFile(componentPath, 'utf8', (err, data) => {
    if (err) {
      return res.status(404).send('Component not found');
    }
    res.send(data);
  });
};

// Update component code
exports.updateComponentCode = (req, res) => {
  const componentName = req.params.name;
  const newCode = req.body.code;
  const componentPath = path.join(__dirname, '../../components', `${componentName}.js`);

  fs.writeFile(componentPath, newCode, 'utf8', (err) => {
    if (err) {
      return res.status(500).send('Failed to update the component');
    }
    res.send('Component updated successfully');
  });
};
