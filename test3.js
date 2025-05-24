const filteredExperts = experts.filter(expert =>
  expert.name.toLowerCase().includes(query.toLowerCase())
);
