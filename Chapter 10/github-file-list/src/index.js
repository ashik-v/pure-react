import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import './index.css'
import Time from './Time'

const FileList = ({files}) => (
  <table className="file-list">
    <tbody>
      {files.map((file) => (
        <FileListItem file={file} />
      ))}
    </tbody>
  </table>
)

FileList.propTypes = {
  files: PropTypes.array
}

const FileListItem = ({file}) => (
  <tr className="file-list-item">
    <FileName file={file} />
    <CommitMessage commit={file.latestCommit} />
    <Time className="file-age" time={file.updated_at} />
  </tr>
)

function FileName({file}) {
  return (
    <>
      <FileIcon file={file} />
      <td className="file-name">{file.name}</td>
    </>
  )
}

FileName.propTypes = {
  file: PropTypes.object.isRequired,
}

function FileIcon({file}) {
  let icon = 'fa-file-text-o'
  if (file.type === 'folder') {
    icon = 'fa-folder'
  }

  return (
    <td className="file-icon">
      <i className={`fa ${icon}`} />
    </td>
  )
}

FileIcon.propTypes = {
  file: PropTypes.object.isRequired,
}

const CommitMessage = ({commit}) => (<td className="commit-message">{commit.message}</td>)

CommitMessage.propTypes = {
  commit: PropTypes.object.isRequired,
}

const testFiles = [
{
  id: 1,
  name: 'src',
  type: 'folder',
  updated_at: '2022-07-11 21:24:00',
  latestCommit: {
    message: 'Initial commit',
  },
},
{
  id: 2,
  name: 'tests',
  type: 'folder',
  updated_at: '2022-07-11 21:24:00',
  latestCommit: {
    message: 'Initial commit',
  },
},
{
  id: 3,
  name: 'README',
  type: 'file',
  updated_at: '2022-07-18 21:24:00',
  latestCommit: {
    message: 'Add readme',
  },
},
]

ReactDOM.render(<FileList files={testFiles} />, document.querySelector('#root'))