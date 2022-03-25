export const Rels = {
	// default Brightspace domain rels
	assessment: 'https://api.brightspace.com/rels/assessment',
	assignment: 'https://api.brightspace.com/rels/assignment',
	cachePrimer: 'https://api.brightspace.com/rels/cache-primer',
	color: 'https://api.brightspace.com/rels/color',
	completion: 'https://api.brightspace.com/rels/completion',
	content: 'https://api.brightspace.com/rels/content',
	courseOfferingInfoPage: 'https://api.brightspace.com/rels/course-offering-info-page',
	date: 'https://api.brightspace.com/rels/date',
	defaultSearch: 'https://api.brightspace.com/rels/default-search',
	departments: 'https://api.brightspace.com/rels/departments',
	displayName: 'https://api.brightspace.com/rels/display-name',
	email: 'https://api.brightspace.com/rels/email',
	enrolledUser: 'https://api.brightspace.com/rels/enrolled-user',
	enrollments: 'https://api.brightspace.com/rels/enrollments',
	evaluation: 'https://api.brightspace.com/rels/evaluation',
	feedback: 'https://api.brightspace.com/rels/feedback',
	filter: 'https://api.brightspace.com/rels/filter',
	filters: 'https://api.brightspace.com/rels/filters',
	firstName: 'https://api.brightspace.com/rels/first-name',
	group: 'https://api.brightspace.com/rels/group',
	lastName: 'https://api.brightspace.com/rels/last-name',
	myEnrollments: 'https://api.brightspace.com/rels/my-enrollments',
	myMeetings: 'https://meetings.api.brightspace.com/rels/my-meetings',
	myNotifications: 'https://notifications.api.brightspace.com/rels/my-notifications',
	myOrganizationGrades: 'https://api.brightspace.com/rels/my-organization-grades',
	myOrganizationAwards: 'https://api.brightspace.com/rels/my-organization-awards',
	userEnrollment: 'https://api.brightspace.com/rels/user-enrollment',
	userPronouns: 'https://api.brightspace.com/rels/user-pronouns',
	organization: 'https://api.brightspace.com/rels/organization',
	organizationHomepage: 'https://api.brightspace.com/rels/organization-homepage',
	organizationImage: 'https://api.brightspace.com/rels/organization-image',
	organizations: 'https://api.brightspace.com/rels/organizations',
	orgDefinedId: 'https://api.brightspace.com/rels/org-defined-id',
	pager: 'https://api.brightspace.com/rels/pager',
	parentSemester: 'https://api.brightspace.com/rels/parent-semester',
	profileImage: 'https://api.brightspace.com/rels/profile-image',
	quiz: 'https://api.brightspace.com/rels/quiz',
	restricted: 'https://api.brightspace.com/rels/restricted',
	role: 'https://api.brightspace.com/rels/role',
	root: 'https://api.brightspace.com/rels/root',
	richTextEditorConfig: 'https://api.brightspace.com/rels/richtext-editor-config',
	rubric: 'https://api.brightspace.com/rels/rubric',
	rubrics: 'https://api.brightspace.com/rels/rubrics',
	semesters: 'https://api.brightspace.com/rels/semesters',
	sequence: 'https://api.brightspace.com/rels/sequence',
	sorts: 'https://api.brightspace.com/rels/sorts',
	thumbnailRegular: 'https://api.brightspace.com/rels/thumbnail#regular',
	thumbnailSmall: 'https://api.brightspace.com/rels/thumbnail#small',
	userProfile: 'https://api.brightspace.com/rels/user-profile',
	userProgress: 'https://api.brightspace.com/rels/user-progress',
	user: 'https://api.brightspace.com/rels/user',
	users: 'https://api.brightspace.com/rels/users',
	viewMembers: 'https://api.brightspace.com/rels/view-members',
	whoami: 'https://api.brightspace.com/rels/whoami',
	widgetSettings: 'https://api.brightspace.com/rels/widget-settings',
	// Activities API sub-domain rels
	Activities: {
		myActivities: 'https://activities.api.brightspace.com/rels/my-activities',
		myActivitiesEmpty: 'https://activities.api.brightspace.com/rels/my-activities#empty',
		activityUsage: 'https://activities.api.brightspace.com/rels/activity-usage',
		actorActivityUsage: 'https://activities.api.brightspace.com/rels/actor-activity-usage',
		myActivityUsage: 'https://activities.api.brightspace.com/rels/my-activity-usage',
		userActivityUsage: 'https://activities.api.brightspace.com/rels/user-activity-usage',
		myUnassessedActivities: 'https://activities.api.brightspace.com/rels/my-unassessed-activities',
		overdue: 'https://activities.api.brightspace.com/rels/overdue',
		nextPeriod: 'https://activities.api.brightspace.com/rels/next-period',
		nextWeek: 'https://activities.api.brightspace.com/rels/next-week',
		previousPeriod: 'https://activities.api.brightspace.com/rels/previous-period',
		previousWeek: 'https://activities.api.brightspace.com/rels/previous-week',
		feedback: 'https://activities.api.brightspace.com/rels/feedback',
		feedbackAttachments: 'https://activities.api.brightspace.com/rels/attachments',
		activityGrade: 'https://activities.api.brightspace.com/rels/activity-grade',
		activityHomepage: 'https://activities.api.brightspace.com/rels/activity-homepage',
		evaluationStatus: 'https://activities.api.brightspace.com/rels/evaluation-status',
		associations: 'https://activities.api.brightspace.com/rels/associations',
		evaluation: 'https://activities.api.brightspace.com/rels/evaluation',
		evaluatorCandidates: 'https://activities.api.brightspace.com/rels/evaluator-candidates',
		learnerCandidates:'https://activities.api.brightspace.com/rels/learner-candidates',
		selectedEvaluators: 'https://activities.api.brightspace.com/rels/selected-evaluator-candidates',
		user: 'https://activities.api.brightspace.com/rels/user'
	},
	// Assessments
	Assessments: {
		assessmentApplication: 'https://assessments.api.brightspace.com/rels/assessment-application',
		assessmentCriterion: 'https://assessments.api.brightspace.com/rels/assessment-criterion',
		submissionApplication: 'https://assessments.api.brightspace.com/rels/submission-application',
		assessAllApplication: 'https://assessments.api.brightspace.com/rels/assess-all-application',
		assessNewApplication: 'https://assessments.api.brightspace.com/rels/assess-new-application',
		activityUsageEditApplication: 'https://assessments.api.brightspace.com/rels/activity-usage-edit-application',
		activityUsageViewApplication: 'https://assessments.api.brightspace.com/rels/activity-usage-view-application',
		activityUsageViewEventLog: 'https://assessments.api.brightspace.com/rels/activity-usage-view-event-log',
		assessRubricApplication: 'https://assessments.api.brightspace.com/rels/assessment-rubric-application'
	},
	// Assignments
	Assignments: {
		instructions: 'https://assignments.api.brightspace.com/rels/instructions',
		attachments: 'https://assignments.api.brightspace.com/rels/attachments',
		anonymousMarking: 'https://assignments.api.brightspace.com/rels/anonymous-marking',
		attachmentList: 'https://assignments.api.brightspace.com/rels/attachment-list',
		editSpecialAccess: 'https://assignments.api.brightspace.com/rels/edit-special-access-application',
		submissionList: 'https://assignments.api.brightspace.com/rels/assignment-submission-list',
		turnItIn: 'https://assignments.api.brightspace.com/rels/turnitin'
	},
	// Awards
	Awards: {
		courseUserAvailableAwards: 'https://awards.api.brightspace.com/rels/course-user-available-awards',
		courseUserAwardedAwards: 'https://awards.api.brightspace.com/rels/course-user-awarded-awards',
		releaseConditions: 'https://awards.api.brightspace.com/rels/release-conditions',
		userAward: 'https://awards.api.brightspace.com/rels/user-award',
		userAwards: 'https://awards.api.brightspace.com/rels/user-awards'
	},
	Checklists: {
		checklist: 'https://checklists.api.brightspace.com/rels/checklist',
		checklistItem: 'https://checklists.api.brightspace.com/rels/checklist-item'
	},
	Conditions: {
		conditions: 'https://conditions.api.brightspace.com/rels/conditions'
	},
	Content: {},
	// Parents API sub-domain rels
	Parents: {
		allChildren: 'https://parents.api.brightspace.com/rels/all-my-children'
	},
	// Discussions API sub-domain rels
	Discussions: {
		description: 'https://discussions.api.brightspace.com/rels/description',
		forum: 'https://discussions.api.brightspace.com/rels/forum',
		mySubscriptions: 'https://discussions.api.brightspace.com/rels/my-subscriptions',
		topic: 'https://discussions.api.brightspace.com/rels/topic',
		thread: 'https://discussions.api.brightspace.com/rels/thread'
	},
	// Feedback API sub-domain rels
	Feedback: {
		applications: 'https://feedback.api.brightspace.com/rels/applications',
		submission: 'https://feedback.api.brightspace.com/rels/feedback-submission',
	},
	// Files API sub-domain rels
    Files: {
        files: 'https://files.api.brightspace.com/rels/files',
        file: 'https://files.api.brightspace.com/rels/file'
    },
	// Folio API sub-domain rels
	Folio: {
		contentItem: 'https://folio.api.brightspace.com/rels/Content',
		commentList: 'https://folio.api.brightspace.com/rels/CommentList',
		evidence: 'https://folio.api.brightspace.com/rels/Evidence',
		folio: 'https://folio.api.brightspace.com/rels/folio',
		reflection: 'https://folio.api.brightspace.com/rels/Reflection',
		courseInfo: 'https://folio.api.brightspace.com/rels/CourseInfo',
		courseList: 'https://folio.api.brightspace.com/rels/CourseList'
	},
	// Grades API sub-domain rels
	Grades: {
		comment: 'https://grades.api.brightspace.com/rels/comment',
		comments: 'https://grades.api.brightspace.com/rels/comments',
		description: 'https://grades.api.brightspace.com/rels/description',
		grade: 'https://grades.api.brightspace.com/rels/grade',
		userGrade: 'https://grades.api.brightspace.com/rels/user-grade',
		weight: 'https://grades.api.brightspace.com/rels/weight'
	},
	// Questions API sub-domain rels
	Questions: {
		identifier: 'https://questions.api.brightspace.com/rels/identifier',
		itemBody: 'https://questions.api.brightspace.com/rels/item-body',
		interaction: 'https://questions.api.brightspace.com/rels/interaction',
		responseDeclaration: 'https://questions.api.brightspace.com/rels/response-declaration'
	},
	// Quizzes API sub-domain rels
	Quizzes: {
		description: 'https://quizzes.api.brightspace.com/rels/description',
		gradingUser: 'https://api.brightspace.com/rels/grading-user',
		question: 'https://quizzes.api.brightspace.com/rels/question',
		questionResponse: 'https://quizzes.api.brightspace.com/rels/question-response',
		quiz: 'https://quizzes.api.brightspace.com/rels/quiz',
		timing: 'https://quizzes.api.brightspace.com/rels/timing'
	},
	// Themes API sub-domain rels
	Themes: {
		theme: 'https://themes.api.brightspace.com/rels/theme',
		logo: 'https://themes.api.brightspace.com/rels/logo',
	},
	// Notifications API sub-domain rels
	Notifications: {
		settings: 'https://notifications.api.brightspace.com/rels/settings',
		subscriptions: 'https://notifications.api.brightspace.com/rels/subscriptions',
		digest: 'https://digest.api.brightspace.com/rels/digest',
		emailSettings: 'https://notifications.api.brightspace.com/rels/email-settings',
		smsSettings: 'https://notifications.api.brightspace.com/rels/sms-settings',
		gateways: 'https://notifications.api.brightspace.com/rels/gateways',
		gateway: 'https://notifications.api.brightspace.com/rels/gateway',
		organizationNotifications: 'https://notifications.api.brightspace.com/rels/organization-notifications',
		updates: 'https://notifications.api.brightspace.com/rels/updates',
		updatesSource: 'https://notifications.api.brightspace.com/rels/updates-source'
	},
	// Rubrics API sub-domain rels
	Rubrics: {
		allowedAssociations: 'https://rubrics.api.brightspace.com/rels/allowed-associations',
		criteria: 'https://rubrics.api.brightspace.com/rels/criteria',
		criteriaGroups: 'https://rubrics.api.brightspace.com/rels/criteria-groups',
		criterion: 'https://rubrics.api.brightspace.com/rels/criterion',
		criterionCell: 'https://rubrics.api.brightspace.com/rels/criterion-cell',
		level: 'https://rubrics.api.brightspace.com/rels/level',
		levels: 'https://rubrics.api.brightspace.com/rels/levels',
		overallLevel: 'https://rubrics.api.brightspace.com/rels/overall-level',
		overallLevels: 'https://rubrics.api.brightspace.com/rels/overall-levels',
		rubric: 'https://rubrics.api.brightspace.com/rels/rubric'
	},
	Surveys: {
		description: 'https://surveys.api.brightspace.com/rels/description',
		survey: 'https://surveys.api.brightspace.com/rels/survey'
	},
	Alignments: {
		alignments: 'https://alignments.api.brightspace.com/rels/alignments',
		activityAlignmentsHierarchical: 'https://alignments.api.brightspace.com/rels/activity-alignments-hierarchical'
	},
	Achievements: {
		level: 'https://achievements.api.brightspace.com/rels/level'
	},
	Outcomes: {
		intents: 'https://outcomes.api.brightspace.com/rels/intents',
		intent: 'https://outcomes.api.brightspace.com/rels/intent',
		outcome: 'https://outcomes.api.brightspace.com/rels/outcome'
	},
	Meetings: {
		meetingManagementTool: 'https://meetings.api.brightspace.com/rels/meeting-management-tool'
	},
	Users: {
		canonicalUser: 'https://users.api.brightspace.com/rels/canonical-user',
		settingsProfileCard: 'https://users.api.brightspace.com/rels/settings/userProfileCard'
	},
	UserProgress: {
		outcomeActivities: 'https://user-progress.api.brightspace.com/rels/outcome-activities',
		feedback: 'https://user-progress.api.brightspace.com/rels/feedback'
	}
};

export const Classes = {
	activities: {
		activity: 'activity',
		assigned: 'assigned',
		assignmentActivity: 'assignment-activity',
		complete: 'complete',
		completion: 'completion',
		discussionActivity: 'discussion-activity',
		exempt: 'exempt',
		feedbackDate: 'feedback-date',
		fileActivity: 'file-activity',
		incomplete: 'incomplete',
		quizActivity: 'quiz-activity',
		unevaluated: 'Unevaluated',
		userAssignmentActivity: 'user-assignment-activity',
		userQuizActivity: 'user-quiz-activity',
		userQuizAttemptActivity: 'user-quiz-attempt-activity',
		userContentActivity: 'user-content-activity',
		userCourseOfferingActivity: 'user-course-offering-activity-usage',
		userDiscussionActivity: 'user-discussion-activity',
		userChecklistActivity: 'user-checklist-activity',
		userSurveyActivity: 'user-survey-activity',
		potentialAssociation: 'potential-association',
		published: 'Published',
		singleAssociation: 'single-association',
	},
	assignments: {
		annotated: 'annotated',
		assignment: 'assignment',
		assignmentSubmission: 'assignment-submission',
		attachment: 'attachment',
		attachmentList: 'attachment-list',
		instructions: 'instructions',
		file: 'file',
		latest: 'latest',
		link: 'link',
		submissionComment: 'submission-comment',
		submissionDate: 'submission-date',
		submissionList: 'assignment-submission-list'
	},
	awards: {
		available: 'available',
		awarded: 'awarded',
		awardImage: 'award-image',
		badge: 'badge',
		certificate: 'certificate',
		releaseCondition: 'release-condition',
		releaseConditions: 'release-conditions',
		userAward: 'user-award',
		userAwards: 'user-awards'
	},
	checklists: {
		checklistItem: 'checklist-item',
		description: 'description'
	},
	conditions: {
		section: 'section'
	},
	content: {
		content: 'content',
		sequence: 'sequence',
		sequencedActivity: 'sequenced-activity',
		sequenceDescription: 'sequence-description',
		topic: 'topic',
		module: 'module'
	},
	courseImage: {
		courseImage: 'course-image',
		banner: 'banner',
		tile: 'tile',
		wide: 'wide',
		narrow: 'narrow',
		min: 'min',
		mid: 'mid',
		max: 'max',
		highDensity: 'high-density',
		lowDensity: 'low-density'
	},
	dates: {
		date: 'date',
		dueDate: 'due-date',
		endDate: 'end-date',
		issueDate: 'issue-date',
		startDate: 'start-date'
	},
	discussions: {
		discussion: 'discussion',
		topic: 'topic',
		description: 'description',
		unlocked: 'unlocked'
	},
	enrollments: {
		enrollment: 'enrollment',
		pinned: 'pinned',
		unpinned: 'unpinned'
	},
	feedback: {
		feedbackApplication: 'feedback-application',
		feedbackApplications: 'feedback-applications',
		feedback: 'feedback',
		feedbackType: 'feedback-type',
		feedbackSubmission: 'feedback-submission',
	},
	grades: {
		comments: 'comments',
		description: 'description',
		final: 'final',
		grade: 'grade',
		userGrade: 'user-grade',
		userGrades: 'user-grades',
		weighted: 'weighted',
		points: 'points'
	},
	organizations: {
		completionTracked: 'completion-tracked',
		courseOffering: 'course-offering'
	},
	questions: {
		candidateResponse: 'candidate-response',
		correctResponse: 'correct-response',
		longAnswer: 'LongAnswer',
		multipleChoice: 'MultipleChoice',
		multiSelect: 'MultiSelect',
		questionText: 'questionText',
		selected: 'selected',
		simpleChoice: 'simple-choice',
		value: 'value'
	},
	quizzes: {
		attempts: 'attempts',
		autograded: 'auto-graded',
		description: 'description',
		endDate: 'end-date',
		enforced: 'enforced',
		overallGradeCalculationType: 'overall-grade-calculation-type',
		quiz: 'quiz',
		quizAttemptList: 'quiz-attempt-list',
		recommended: 'recommended',
		startDate: 'start-date',
		timeLimitEnforced: 'time-limit-enforced'
	},
	surveys: {
		active: 'active',
		description: 'description',
		inactive: 'inactive',
		survey: 'survey'
	},
	text: {
		annotated: 'annotated',
		richtext: 'richtext'
	},
	users: {
		profile: 'profile'
	},
	notifications: {
		subscription: {
			instant: 'instant',
			digest: 'digest',
			subscribed: 'subscribed',
			unsubscribed: 'unsubscribed',
			disabled: 'disabled'
		}
	},
	rubrics: {
		analytic: 'analytic',
		assessmentCriterionCell: 'assessment-criterion-cell',
		associations: 'associations',
		criterion: 'criterion',
		criterionAssessmentLinks: 'criterion-assessment-links',
		criterionCell: 'criterion-cell',
		criterionCellSelector: 'criterion-cell-selector',
		criteriaGroup: 'criteria-group',
		description: 'description',
		feedback: 'feedback',
		holistic: 'holistic',
		level: 'level',
		overallFeedback: 'overall-feedback',
		overallLevel: 'overall-level',
		overallLevelSelector: 'overall-level-selector',
		numeric: 'numeric',
		overridden: 'overridden',
		percentage: 'percentage',
		selected: 'selected'
	},
	alignments: {
		selected: 'selected',
		indeterminate: 'indeterminate'
	},
	outcomes: {
		assessed: 'assessed',
		demonstration: 'demonstration',
		demonstratableLevel: 'demonstratable-level',
		intent: 'intent',
		intents: 'intents',
		intentList: 'intent-list',
		levelOfAchievement: 'level-of-achievment',
		organizationIntentList: 'organization-intent-list',
		outcome: 'outcome',
		outcomes: 'outcomes',
		selected: 'selected',
		suggested: 'suggested'
	},
	meetings: {
		bookable: 'bookable'
	},
	relativeUri: 'relative-uri',
	userProgress: {
		outcomes: {
			outcomes: 'user-progress-outcomes',
			outcome: 'user-progress-outcome',
			activities: 'user-progress-outcome-activities',
			activity: 'user-progress-outcome-activity',
			outcomeTree: 'user-progress-outcome-nodes',
			outcomeTreeNode: 'user-progress-outcome-node'
		}
	}
};

export const Actions = {
	enrollments: {
		addDepartmentFilter: 'add-department-filter',
		addSemesterFilter: 'add-semester-filter',
		pinCourse: 'pin-course',
		removeDepartmentFilter: 'remove-department-filter',
		removeSemesterFilter: 'remove-semester-filter',
		searchMyEnrollments: 'search-my-enrollments',
		searchMyPinnedEnrollments: 'search-my-pinned-enrollments',
		searchMyDepartments: 'search-my-departments',
		searchMySemesters: 'search-my-semesters',
		setRoleFilters: 'set-role-filters',
		unpinCourse: 'unpin-course',
		updateUserSettings: 'update-user-settings',
		roleFilters: {
			addFilter: 'add-filter',
			applyRoleFilters: 'apply-role-filters',
			clearRoleFilters: 'clear-role-filters',
			removeFilter: 'remove-filter'
		}
	},
	organizations: {
		removeHomepageBanner: 'remove-homepage-banner',
		setCatalogImage: 'set-catalog-image'
	},
	activities: {
		selectCustomDateRange: 'select-custom-date-range'
	},
	assignments: {
		assign: 'assign',
		delete: 'delete'
	},
	notifications: {
		getCarrierClass: 'get-carrier',
		settings: {
			update: 'update'
		},
		emailSettings: {
			update: 'update',
			delete: 'delete'
		},
		smsSettings: {
			create: 'create',
			update: 'update',
			delete: 'delete',
			verify: 'verify'
		},
		gateways: {
			search: 'search'
		},
		gateway: {
			updateNumber: 'update-number'
		},
		subscription: {
			subscribe: 'subscribe',
			unsubscribe: 'unsubscribe',
			update: 'update'
		}
	},
	digest: {
		subscribeToParentNotifications: 'subscribe-to-parent-notifications',
		skipSubscribeToParentNotifications: 'skip-subscribe-to-parent-notifications',
		unsubscribeToParentNotifications: 'unsubscribe-to-parent-notifications'
	},
	rubrics: {
		selectCriterionCell: 'select-criterion-cell'
	},
	alignments: {
		removeAlignment: 'remove-alignment',
		deferredRemoveAlignment: 'deferred-remove-alignment',
		startUpdateAlignments: 'start-update-alignments',
		select: 'select',
		deselect: 'deselect',
		submit: 'submit',
		deferredSubmit: 'deferred-submit'
	},
	outcomes: {
		select: 'select'
	},
	feedback: {
		submit: 'submit-feedback',
		optOut: 'opt-out'
	}
};
