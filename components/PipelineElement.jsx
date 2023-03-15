import React from "react";

const PipelineElement = ({
  name,
  biosimilar,
  reference,
  therapeuticArea,
  earlyphase,
  preclinical,
  clinicaltrial,
  filing,
  approval,
  launch,
}) => {
  return (
    <div className="pipeline_element">
      <li className="pipeline_element__item">
        <h3 className="pipeline_element__item__title text-gradient-2">{name}</h3>
        <div className="pipeline_element__item__details">
          <dl className="pipeline_element__item__info">
            <dt className="pipeline_element__item__info__label">
              Biosimilar Candidate
            </dt>
            <dd className="pipeline_element__item__info__value">{biosimilar}</dd>
            <dt className="pipeline_element__item__info__label">
              Reference Biologic
            </dt>
            <dd className="pipeline_element__item__info__value">{reference}</dd>
            <dt className="pipeline_element__item__info__label">
              Therapeutic Area
            </dt>
            <dd className="pipeline_element__item__info__value">
              {therapeuticArea}
            </dd>
          </dl>
          {/* {approvalName.length != 0 ? (
            <div class="Pipeline_pipelineItem__approvals__DAx3A">
              <h4 class="Pipeline_pipelineItem__approvalsTitle__pnpBi">
                Approved by
              </h4>
              <ul class="Pipeline_pipelineItem__approvalsList__dzjf6">
                <li>{approvalName}</li>
                {approvalName.map((agency) => (
                  <li>{agency}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div />
          )} */}
        </div>
        <ul className="pipeline_element__item__stages">
          <li
            className={
              earlyphase
                ? "pipeline_element__item__stages_box_active"
                : "pipeline_element__item__stages_box_passive"
            }
          >
            Early Phase
          </li>
          <li
            className={
              preclinical
                ? "pipeline_element__item__stages_box_active"
                : "pipeline_element__item__stages_box_passive"
            }
          >
            Pre-clinical
          </li>
          <li
            className={
              clinicaltrial
                ? "pipeline_element__item__stages_box_active"
                : "pipeline_element__item__stages_box_passive"
            }
          >
            Clinical Trials
          </li>
          <li
            className={
              filing
                ? "pipeline_element__item__stages_box_active"
                : "pipeline_element__item__stages_box_passive"
            }
          >
            Filing
          </li>
          <li
            className={
              approval
                ? "pipeline_element__item__stages_box_active"
                : "pipeline_element__item__stages_box_passive"
            }
          >
            Approval
          </li>
          <li
            className={
              launch
                ? "pipeline_element__item__stages_box_active"
                : "pipeline_element__item__stages_box_passive"
            }
          >
            Launch
          </li>
        </ul>
      </li>
    </div>
  );
};

export default PipelineElement;
