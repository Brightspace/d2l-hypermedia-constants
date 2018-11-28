import {Actions, Classes, Rels} from 'index.js';

window.D2L = window.D2L || {};
window.D2L.Hypermedia = window.D2L.Hypermedia || {};
window.D2L.Hypermedia.Constants = {
	Actions: Actions,
	Classes: Classes,
	Rels: Rels
};
// for backwards-compatibility
window.D2L.Hypermedia.HMConstantsBehavior = {
	HypermediaActions: Actions,
	HypermediaClasses: Classes,
	HypermediaRels: Rels
};
