pragma solidity ^0.4.17;

contract Inbox{
    string public message;

    function Inbox(string _inititalMessage) public {
        message = _inititalMessage;
    }

    function setMessage(string _newMessage) public {
        message = _newMessage;
    }
}