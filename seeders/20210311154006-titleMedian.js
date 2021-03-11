'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('SalaryRates', [{
      title: 'Computer Programmer',
      median: 86550,
      createdAt: new Date(), 
      updatedAt: new Date()
    }, 
    {
      title: 'Software Developer',
      median: 107510,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Computer and Info System Manager',
      median: 146360,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Computer Support Specialist',
      median: 54760,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Computer System Analyst',
      median: 90920,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Database Administrator',
      median: 93750,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Graphic Designer',
      median: 52110,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Information Security Analyst',
      median: 99730,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Special Effects Artist and Animator',
      median: 75270,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Computer Network Architect',
      median: 112690,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Web Developer - Digital Designer',
      median: 73760,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Certified Scrum Master',
      median: 95167,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Agile Project Manager',
      median: 100827,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'CCNP Routing and Switching',
      median: 113052,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Microsoft: Azure Fundamentals',
      median: 119030,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'CCA-N: Citrix Cert. Assoc. Networking',
      median: 122313,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Microsoft: Azure Admin Assoc.',
      median: 122768,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'VCP6-DCV VMware Data Center Virtualization',
      median: 125918,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'AWS Cert. Cloud Practitioner',
      median: 128620,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'PMP - Project Management Professional',
      median: 136236,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'CRISC - Cert in Risk and Info Sys Control',
      median: 141172,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'AWS Solutions Architect - Associate',
      median: 142191,
      createdAt: new Date(), 
      updatedAt: new Date()
    },{
      title: 'Google Cert. Professional Cloud Architect',
      median: 169611,
      createdAt: new Date(), 
      updatedAt: new Date()
    }

  ], {});
  },
    
    
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SalaryRates', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
