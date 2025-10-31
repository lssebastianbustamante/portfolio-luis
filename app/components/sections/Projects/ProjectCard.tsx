"use client";
import { FormattedMessage, useIntl } from 'react-intl';

interface Props {
    title: string
    link: string
    description: string
    stack?: string
    stackId?: string
}

function ProjectCard({ title, description, link, stack, stackId }: Props) {
    const intl = useIntl();
    const stackText = stackId
      ? intl.formatMessage({ id: stackId, defaultMessage: stack || '' })
      : (stack || '');
    return (
        <div className="project-card border rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-[#93b7be] transition-all bg-white">
          <h3 className="text-xl font-semibold mb-2 text-[#000000]">{title}</h3>
          <p className="text-[#4b4f58] mb-3 leading-relaxed">{description}</p>
          <p className="text-sm text-[#6b7280] mb-3 italic stack">
            <FormattedMessage id="projects.stackLabel" defaultMessage="Stack:" /> {stackText}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="button"
          >
            <span><FormattedMessage id="projects.viewOnGitHub" defaultMessage="View on GitHub" /></span>
          </a>
        </div>
      );
}

export default ProjectCard;