(this["webpackJsonpmolochv3-ui"]=this["webpackJsonpmolochv3-ui"]||[]).push([[6],{1003:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return k}));var a=r(0),n=r(145),s=r(78),c=r(7),o=r(62),i=r(49),u=r(4),d=r.n(u),l=r(3),b=r(12),p=r(5),j=r(1),O=r(18),f=r(19),h=r(33),m=r(71),x=r(20),g=r(66),N=r(102),w=r(35),I=r(67),v=r(23),y=r(60);function A(e){var t=e.proposal,r=t.snapshotDraft,n=t.refetchProposalOrDraft,s=Object(j.useState)(),o=Object(p.a)(s,2),u=o[0],A=o[1],D=Object(O.c)((function(e){return e.contracts})),P=Object(O.c)((function(e){var t;return null===(t=e.contracts.DaoRegistryContract)||void 0===t?void 0:t.contractAddress})),F=Object(x.f)(),S=F.account,k=F.web3Instance,E=Object(x.a)(),R=E.txEtherscanURL,L=E.txIsPromptOpen,M=E.txSend,_=E.txStatus,C=Object(g.e)(),G=C.isDisabled,W=C.openWhyDisabledModal,T=C.WhyDisabledModal,V=Object(i.g)(),U=V.proposalSignAndSendStatus,J=V.signAndSendProposal,q=Object(x.b)(),z=_===c.e.AWAITING_CONFIRM||_===c.e.PENDING||U===c.e.AWAITING_CONFIRM||U===c.e.PENDING,B=_===c.e.FULFILLED&&U===c.e.FULFILLED,H=z||B||L;function K(){return(K=Object(b.a)(d.a.mark((function e(){var t,a,s,c,o,i,u,b,p,j,O,m,x;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,P){e.next=3;break}throw new Error("No DAO Registry address was found.");case 3:if(r){e.next=5;break}throw new Error("No Snapshot draft was found.");case 5:return t=Object(h.e)(r.actionId,D),a=r.msg,s=a.payload,c=s.name,o=s.body,i=s.metadata,u=a.timestamp,e.next=9,J({partialProposalData:{name:c,body:o,metadata:i,timestamp:u},adapterAddress:t.contractAddress,type:f.SnapshotType.proposal});case 9:return b=e.sent,p=b.data,j=b.signature,O=Object(f.prepareVoteProposalData)({payload:{name:p.payload.name,body:p.payload.body,choices:p.payload.choices,snapshot:p.payload.snapshot.toString(),start:p.payload.start,end:p.payload.end},sig:j,space:p.space,timestamp:parseInt(p.timestamp)},k),m=[P,r.idInDAO,O],x=Object(l.a)({from:S||""},q?{gasPrice:q.fast}:null),e.next=17,M("sponsorProposal",t.instance.methods,m,x);case 17:n(),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),A(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"proposaldetails__button",disabled:G||H,onClick:G||H?function(){}:function(){return K.apply(this,arguments)},children:z?Object(a.jsx)(y.a,{}):B?"Done":"Sponsor"}),Object(a.jsx)(w.a,{error:u,renderText:"Something went wrong"}),H&&Object(a.jsx)("div",{className:"form__submit-status-container",children:function(){if(_===c.e.AWAITING_CONFIRM||U===c.e.AWAITING_CONFIRM)return"Awaiting your confirmation\u2026";switch(_){case c.e.PENDING:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N.a,{intervalMs:2e3,messages:m.b,useFirstItemStart:!0,render:function(e){return Object(a.jsx)(v.a,{children:e},e)}}),Object(a.jsx)(I.a,{url:R,isPending:!0})]});case c.e.FULFILLED:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:"Proposal submitted!"}),Object(a.jsx)(I.a,{url:R})]});default:return null}}()}),G&&Object(a.jsx)("button",{className:"button--help-centered",onClick:W,children:"Why is sponsoring disabled?"})]}),Object(a.jsx)(T,{title:"Why is sponsoring disabled?"})]})}var D=r(113),P={skipIsActiveMemberCheck:!0};function F(e){var t=e.disabled,r=e.proposal.snapshotProposal,n=Object(j.useState)(),s=Object(p.a)(n,2),o=s[0],i=s[1],u=Object(O.c)((function(e){return e.contracts})),f=Object(O.c)((function(e){var t;return null===(t=e.contracts.DaoRegistryContract)||void 0===t?void 0:t.contractAddress})),A=Object(x.f)().account,F=Object(x.a)(),S=F.txEtherscanURL,k=F.txIsPromptOpen,E=F.txSend,R=F.txStatus,L=Object(g.e)(P),M=L.isDisabled,_=L.openWhyDisabledModal,C=L.WhyDisabledModal,G=Object(x.b)(),W=R===c.e.AWAITING_CONFIRM||R===c.e.PENDING,T=R===c.e.FULFILLED,V=W||T||k,U=M||V||t;function J(){return(J=Object(b.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,f){e.next=3;break}throw new Error("No DAO Registry address was found.");case 3:if(r){e.next=5;break}throw new Error("No Snapshot proposal was found.");case 5:return t=Object(h.e)(r.actionId,u),a=[f,r.idInDAO],n=Object(l.a)({from:A||""},G?{gasPrice:G.fast}:null),e.next=10,E("processProposal",t.instance.methods,a,n);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),i(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"proposaldetails__button",disabled:U,onClick:U?function(){}:function(){return J.apply(this,arguments)},children:W?Object(a.jsx)(y.a,{}):T?"Done":"Process"}),Object(a.jsx)(w.a,{error:o,renderText:"Something went wrong"}),V&&Object(a.jsx)("div",{className:"form__submit-status-container",children:function(){switch(R){case c.e.AWAITING_CONFIRM:return Object(a.jsxs)(a.Fragment,{children:["Awaiting your confirmation",Object(a.jsx)(D.a,{})]});case c.e.PENDING:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N.a,{intervalMs:2e3,messages:m.b,useFirstItemStart:!0,render:function(e){return Object(a.jsx)(v.a,{children:e},e)}}),Object(a.jsx)(I.a,{url:S,isPending:!0})]});case c.e.FULFILLED:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:"Proposal submitted!"}),Object(a.jsx)(I.a,{url:S})]});default:return null}}()}),M&&Object(a.jsx)("button",{className:"button--help-centered",onClick:_,children:"Why is processing disabled?"})]}),Object(a.jsx)(C,{title:"Why is processing disabled?"})]})}function S(e){var t=e.adapterName,r=e.proposal.snapshotProposal,n=Object(j.useState)(),s=Object(p.a)(n,2),i=s[0],u=s[1],f=Object(j.useRef)({alreadyCompletedMessage:""}),A=Object(O.c)((function(e){return e.contracts})),P=Object(O.c)((function(e){return e.contracts.DaoRegistryContract})),F=Object(x.f)().account,S=Object(x.a)(),k=S.txEtherscanURL,E=S.txIsPromptOpen,R=S.txSend,L=S.txStatus,M=Object(g.e)(),_=M.isDisabled,C=M.openWhyDisabledModal,G=M.WhyDisabledModal,W=M.setOtherDisabledReasons,T=Object(x.b)(),V=L===c.e.AWAITING_CONFIRM||L===c.e.PENDING,U=L===c.e.FULFILLED,J=V||U||E,q=_||J;function z(){return B.apply(this,arguments)}function B(){return(B=Object(b.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=t,e.next=e.t0===c.a.distribute?3:19;break;case 3:if(P){e.next=5;break}throw new Error("No DAO Registry contract was found.");case 5:if(a="0",!(null===r||void 0===r?void 0:r.msg.payload.metadata.isTypeAllMembers)){e.next=18;break}return e.prev=8,e.next=11,P.instance.methods.getNbMembers().call();case 11:n=e.sent,a=n.toString(),e.next=18;break;case 15:throw e.prev=15,e.t1=e.catch(8),new Error("Error while retrieving number of DAO members");case 18:return e.abrupt("return",{functionName:"distribute",functionArguments:[P.contractAddress,a]});case 19:return e.abrupt("return",{functionName:"",functionArguments:[]});case 20:case"end":return e.stop()}}),e,null,[[8,15]])})))).apply(this,arguments)}function H(){return(H=Object(b.a)(d.a.mark((function e(){var t,a,n,s,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,r){e.next=3;break}throw new Error("No Snapshot proposal was found.");case 3:return t=Object(h.e)(r.actionId,A),e.next=6,z();case 6:return a=e.sent,n=a.functionName,s=a.functionArguments,c=Object(l.a)({from:F||""},T?{gasPrice:T.fast}:null),e.next=12,R(n,t.instance.methods,s,c);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),u(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function K(){switch(t){case c.a.distribute:return"Assets transferred!";default:return"Action submitted!"}}function Q(){switch(t){case c.a.distribute:return{start:"Transfer assets",done:"Transfer done"};default:return{start:"Process action",done:"Done"}}}return Object(j.useEffect)((function(){function e(){return(e=Object(b.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t!==c.a.distribute){e.next=16;break}if(r){e.next=3;break}throw new Error("No Snapshot proposal was found.");case 3:if(P){e.next=5;break}throw new Error("No DAO Registry contract was found.");case 5:return e.prev=5,a=Object(h.e)(r.actionId,A),e.next=9,a.instance.methods.distributions(P.contractAddress,r.idInDAO).call();case 9:n=e.sent,f.current=Object(l.a)(Object(l.a)({},f.current),{},{alreadyCompletedMessage:o.a[n.status]!==o.a[o.a.IN_PROGRESS]?"The transfer has already been completed.":""}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(5),console.error(e.t0);case 16:W(Object.values(f.current));case 17:case"end":return e.stop()}}),e,null,[[5,13]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,A,P,W,r]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"proposaldetails__button",disabled:q,onClick:q?function(){}:function(){return H.apply(this,arguments)},children:V?Object(a.jsx)(y.a,{}):U?Q().done:Q().start}),Object(a.jsx)(w.a,{error:i,renderText:"Something went wrong"}),J&&Object(a.jsx)("div",{className:"form__submit-status-container",children:function(){switch(L){case c.e.AWAITING_CONFIRM:return Object(a.jsxs)(a.Fragment,{children:["Awaiting your confirmation",Object(a.jsx)(D.a,{})]});case c.e.PENDING:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(N.a,{intervalMs:2e3,messages:m.b,useFirstItemStart:!0,render:function(e){return Object(a.jsx)(v.a,{children:e},e)}}),Object(a.jsx)(I.a,{url:k,isPending:!0})]});case c.e.FULFILLED:return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{children:K()}),Object(a.jsx)(I.a,{url:k})]});default:return null}}()}),_&&Object(a.jsx)("button",{className:"button--help-centered",onClick:C,children:"Why is action disabled?"})]}),Object(a.jsx)(G,{title:"Why is action disabled?"})]})}function k(e){var t=e.adapterName,r=e.proposal,u=Object(i.c)(r),d=u.daoProposalVotes,l=u.status,b=u.daoProposalVoteResult,p=d&&l===o.c.OffchainVotingGracePeriod?1e3*Number(d.gracePeriodStartingTime):0,j=t===c.a.distribute&&l===o.c.Completed&&b&&s.a[b]===s.a[s.a.PASS];return Object(a.jsxs)(a.Fragment,{children:[(l===o.c.OffchainVoting||l===o.c.OffchainVotingSubmitResult||l===o.c.OffchainVotingGracePeriod||l===o.c.Process||l===o.c.Completed)&&Object(a.jsx)(n.c,{countdownGracePeriodStartMs:p,proposal:r}),Object(a.jsxs)("div",{className:"proposaldetails__button-container",children:[l===o.c.Sponsor&&Object(a.jsx)(A,{proposal:r}),l===o.c.OffchainVoting&&Object(a.jsx)(n.b,{adapterName:t,proposal:r}),l===o.c.OffchainVotingSubmitResult&&Object(a.jsx)(n.a,{adapterName:t,proposal:r}),(l===o.c.OffchainVotingGracePeriod||l===o.c.Process)&&Object(a.jsx)(F,{disabled:l===o.c.OffchainVotingGracePeriod,proposal:r}),j&&Object(a.jsx)(S,{adapterName:t,proposal:r})]})]})}}}]);
//# sourceMappingURL=6.95fd68bc.chunk.js.map